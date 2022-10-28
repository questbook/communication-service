// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../types/EmailData";
import { ALL_SUPPORTED_CHAIN_IDS } from "../../configs/chains";
import {
  OnMilestoneUpdatedDocument,
  OnMilestoneUpdatedQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";

const TEMPLATE = templateNames.dao.OnMilestoneUpdated;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

async function handleEmail(
  applicationMilestones: OnMilestoneUpdatedQuery["applicationMilestones"],
  chainId: number,
): Promise<boolean> {
  const emailData: EmailData[] = [];
  for (const milestone of applicationMilestones) {
    const email = {
      to: milestone.application.grant.workspace.members.map(
        (member) => member.email,
      ),
      cc: [],
      replacementData: JSON.stringify({
        projectName: milestone.application.projectName[0].values[0].value,
        applicantName: milestone.application.applicantName[0].values[0].value,
        daoName: milestone.application.grant.workspace.title,
        grantName: milestone.application.grant.title,
        link: `${getDomain(
          chainId,
        )}/your_grants/view_applicants/manage/?applicationId=${
          milestone.application.id
        }`,
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
      projectName: "",
      applicantName: "",
      daoName: "",
      grantName: "",
      link: "",
    }),
  );

  return true;
}

const handleDiscourse = async (
  applicationMilestones: OnMilestoneUpdatedQuery["applicationMilestones"],
): Promise<boolean> => {
  const a = 5;
  return false;
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      continue;
    }

    const results: OnMilestoneUpdatedQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnMilestoneUpdatedDocument,
    );

    if (!results.applicationMilestones || !results.applicationMilestones.length) { continue; }

    const ret = await handleEmail(results.applicationMilestones, chainId);
    if (ret) await setItem(getKey(chainId), toTimestamp);
  }
};
