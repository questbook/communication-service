// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { EmailData } from "../../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../../configs/chains";
import { InvitedMemberDocument } from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getItem, setItem } from "../db";
import sendEmails from "../email";
import executeQuery from "../query";
import {APIGatewayProxyEvent, Context} from "aws-lambda";

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
      InvitedMemberDocument
    );

    const emailData: EmailData[] = [];
    for (const result of results.workspaceMembers) {
      const email = {
        to: [result.email],
        cc: [],
        replacementData: JSON.stringify({
          daoName: result.workspace.title,
          role: `${result.accessLevel.startsWith("a") ? "an" : "a"} ${
            result.accessLevel
          }`,
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
        daoName: "",
        role: "",
        link: "",
      })
    );

    await setItem(getKey(chainId), toTimestamp);
  }
};

export default run;
