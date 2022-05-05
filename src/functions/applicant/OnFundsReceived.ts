// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../../types/EmailData";
import { CHAIN_INFO } from "../../configs/chainInfo";
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../../configs/chains";
import {
  OnFundsReceivedDocument,
  OnFundsReceivedQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import formatAmount from "../../utils/formattingUtils";
import { getItem, setItem } from "../../utils/db";
import sendEmails from "../../utils/email";
import executeQuery from "../../utils/query";

const TEMPLATE = templateNames.applicant.OnFundsReceived;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(chainId: SupportedChainId, time: Date) {
  const fromTimestamp = await getItem(getKey(chainId));
  const toTimestamp = Math.floor(time.getTime() / 1000);

  if (fromTimestamp === -1) {
    await setItem(getKey(chainId), toTimestamp);
    return;
  }

  const results: OnFundsReceivedQuery = await executeQuery(
    chainId,
    fromTimestamp,
    toTimestamp,
    OnFundsReceivedDocument,
  );

  const emailData: EmailData[] = [];
  results.fundsTransfers.forEach(
    (result: OnFundsReceivedQuery["fundsTransfers"][0]) => {
      const currency = CHAIN_INFO[chainId].supportedCurrencies[result.application.grant.reward.asset];

      const email = {
        to: [result.application.applicantEmail[0].values[0].value],
        cc: [],
        replacementData: JSON.stringify({
          projectName: result.application.projectName[0].values[0].value,
          applicantName: result.application.applicantName[0].values[0].value,
          daoName: result.application.grant.workspace.title,
          grantAmount: `${formatAmount(result.amount, currency.decimals)} ${
            currency.label
          }`,
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
      projectName: "",
      applicantName: "",
      daoName: "",
      grantAmount: "",
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
