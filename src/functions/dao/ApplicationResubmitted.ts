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
  ApplicationResubmittedDocument,
  WorkspaceMember,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getItem, setItem } from "../db";
import sendEmails from "../email";
import executeQuery from "../query";

const TEMPLATE = templateNames.dao.InviteMember;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      continue;
    }

    const results = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      ApplicationResubmittedDocument
    );

    const emailData: EmailData[] = [];
    for (const result of results.grantApplications) {
      const email = {
        to: result.grant.workspace.members.map(
          (member: WorkspaceMember) => member.email
        ),
        cc: [],
        replacementData: JSON.stringify({
          projectName: result.projectName[0].values[0].value,
          applicantName: result.applicantName[0].values[0].value,
          grantName: result.grant.title,
          daoName: result.grant.workspace.title,
          link: "https://new.questbook.app/",
        }),
      };
      emailData.push(email);
    }

    if (emailData.length === 0) continue;
    const emailResult = await sendEmails(
      emailData,
      TEMPLATE,
      JSON.stringify({
        projectName: "",
        applicantName: "",
        grantName: "",
        daoName: "",
        link: "",
      })
    );

    await setItem(getKey(chainId), toTimestamp);
  }
};

export default run;
