// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../../configs/chains";
import {
  OnMilestoneAcceptedDocument,
  OnMilestoneAcceptedQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { Template } from "../../generated/templates/applicant/OnMilestoneAccept.json";
import { addReplyToPost } from "../utils/discourse";
import replaceAll from "../utils/string";

const TEMPLATE = templateNames.applicant.OnMilestoneAccept;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(applicationMilestones: OnMilestoneAcceptedQuery['applicationMilestones'], chainId: SupportedChainId) : Promise<boolean> {
  const emailData: EmailData[] = [];
  for (const applicationMilestone of applicationMilestones) {
    const email = {
      to: applicationMilestone.application.applicantEmail[0].values.map(
        (
          item: OnMilestoneAcceptedQuery["applicationMilestones"][0]["application"]["applicantEmail"][0]["values"][0],
        ) => item.value,
      ),
      cc: [],
      replacementData: JSON.stringify({
        applicantName: applicationMilestone.application.applicantName[0].values[0].value,
        daoName: applicationMilestone.application.grant.workspace.title,
        projectName: applicationMilestone.application.projectName[0].values[0].value,
        link: `${getDomain(
          chainId,
        )}/your_applications/manage_grant/?applicationId=${
          applicationMilestone.application.id
        }&chainId=${chainId}`,
      }),
    };
    emailData.push(email);
  }

  if (emailData.length === 0) {
    return false;
  }

  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      applicantName: "",
      daoName: "",
      projectName: "",
      link: "",
    }),
  );

  return true;
}

const handleDiscourse = async (applicationMilestones: OnMilestoneAcceptedQuery['applicationMilestones'], chainId: SupportedChainId) : Promise<boolean> => {
  for (const applicationMilestone of applicationMilestones) {
    const data = {
      applicantName: applicationMilestone.application.applicantName[0].values[0].value,
      daoName: applicationMilestone.application.grant.workspace.title,
      projectName: applicationMilestone.application.projectName[0].values[0].value,
      link: `${getDomain(
        chainId,
      )}/your_applications/manage_grant/?applicationId=${
        applicationMilestone.application.id
      }&chainId=${chainId}`,
    };
    let raw = Template.TextPart;
    for (const key of Object.keys(data)) {
      raw = replaceAll(raw, `{{${key}}}`, data[key]);
    }
    await addReplyToPost(chainId, applicationMilestone.application.id, raw);
  }
  return true;
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      return;
    }

    const results: OnMilestoneAcceptedQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnMilestoneAcceptedDocument,
    );

    if (!results.applicationMilestones || !results.applicationMilestones.length) return;
    const fundsTransfers = results.applicationMilestones.filter((fundsTransfer: OnMilestoneAcceptedQuery['applicationMilestones'][number]) => fundsTransfer.application.applicantEmail.length > 0);

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(fundsTransfers, chainId);
        break;

      default:
        ret = await handleEmail(fundsTransfers, chainId);
    }

    if (ret) await setItem(getKey(chainId), toTimestamp);
  }
};
