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
  OnInviteMemberDocument,
  OnInviteMemberQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../../utils/linkUtils";
import { getItem, setItem } from "../../utils/db";
import sendEmails from "../../utils/email";
import executeQuery from "../../utils/query";

const TEMPLATE = templateNames.dao.OnInviteMember;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(chainId: SupportedChainId, time: Date) {
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

  const emailData: EmailData[] = [];
  results.workspaceMembers.forEach(
    (result: OnInviteMemberQuery["workspaceMembers"][0]) => {
      if (!result.email) {
        return;
      }

      const email = {
        to: [result.email!],
        cc: [],
        replacementData: JSON.stringify({
          daoName: result.workspace.title,
          role: `${result.accessLevel.startsWith("a") ? "an" : "a"} ${
            result.accessLevel
          }`,
          link: getDomain(chainId),
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
      daoName: "",
      role: "",
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
