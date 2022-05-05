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
import getDomain from "../../utils/linkUtils";
import { getItem, setItem } from "../../utils/db";
import sendEmails from "../../utils/email";
import executeQuery from "../../utils/query";

const TEMPLATE = templateNames.applicant.OnMilestoneAccept;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(chainId: SupportedChainId, time: Date) {
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

  const emailData: EmailData[] = [];
  results.applicationMilestones.forEach(
    (result: OnMilestoneAcceptedQuery["applicationMilestones"][0]) => {
      const email = {
        to: result.application.applicantEmail[0].values.map(
          (
            item: OnMilestoneAcceptedQuery["applicationMilestones"][0]["application"]["applicantEmail"][0]["values"][0],
          ) => item.value,
        ),
        cc: [],
        replacementData: JSON.stringify({
          applicantName: result.application.applicantName[0].values[0].value,
          daoName: result.application.grant.workspace.title,
          projectName: result.application.projectName[0].values[0].value,
          link: `${getDomain(
            chainId,
          )}/your_applications/manage_grant/?applicationId=${
            result.application.id
          }&chainId=${chainId}`,
        }),
      };
      emailData.push(email);
    },
  );

  if (emailData.length === 0) {
    return;
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

  await setItem(getKey(chainId), toTimestamp);
}

const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  ALL_SUPPORTED_CHAIN_IDS.forEach((chainId: SupportedChainId) => {
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        break;

      default:
        handleEmail(chainId, time);
    }
  });
};

export default run;
