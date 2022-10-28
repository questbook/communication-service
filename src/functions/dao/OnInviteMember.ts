// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
} from "../../configs/chains";
import {
  OnInviteMemberDocument,
  OnInviteMemberQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";

const TEMPLATE = templateNames.dao.OnInviteMember;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

async function handleEmail(chainId: number, time: Date) {
  const fromTimestamp = await getItem(getKey(chainId));
  const toTimestamp = Math.floor(time.getTime() / 1000);

  if (fromTimestamp === -1) {
    await setItem(getKey(chainId), toTimestamp);
    return;
  }

  const results: OnInviteMemberQuery = await executeQuery(
    chainId,
    fromTimestamp,
    toTimestamp,
    OnInviteMemberDocument,
  );

  if (!results.workspaceMembers || !results.workspaceMembers.length) return;

  const emailData: EmailData[] = [];
  for (const member of results.workspaceMembers) {
    if (!member.email) {
      return;
    }

    const email = {
      to: [member.email!],
      cc: [],
      replacementData: JSON.stringify({
        daoName: member.workspace.title,
        role: `${member.accessLevel.startsWith("a") ? "an" : "a"} ${
          member.accessLevel
        }`,
        link: getDomain(chainId),
      }),
    };
    emailData.push(email);
  }

  if (emailData.length === 0) {
    return;
  }

  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      daoName: "",
      role: "",
      link: "",
    }),
  );

  await setItem(getKey(chainId), toTimestamp);
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    await handleEmail(chainId, time);
  }
};
