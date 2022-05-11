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
  Token,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import formatAmount from "../../utils/formattingUtils";
import { getItem, setItem } from "../../utils/db";
import sendEmails from "../../utils/email";
import { executeQuery } from "../../utils/query";
import { Template } from "../../generated/templates/applicant/OnFundsReceived.json";
import { addReplyToPost } from "../../utils/discourse";

const TEMPLATE = templateNames.applicant.OnFundsReceived;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

const getCurrency = (
  key: string,
  chainId: SupportedChainId,
  tokens: OnFundsReceivedQuery["fundsTransfers"][number]["application"]["grant"]["workspace"]["tokens"],
) => {
  const currency = tokens.find(
    (
      token: OnFundsReceivedQuery["fundsTransfers"][number]["application"]["grant"]["workspace"]["tokens"][number],
    ) => token.address === key,
  ) || CHAIN_INFO[chainId].supportedCurrencies[key];
  if (!currency) return { label: "UNDEFINED", decimals: 18 };
  return { label: currency.label, decimal: currency.decimal };
};

async function handleEmail(
  fundsTransfers: OnFundsReceivedQuery["fundsTransfers"],
  chainId: SupportedChainId,
) {
  const emailData: EmailData[] = [];
  fundsTransfers.forEach(
    (fundsTransfer: OnFundsReceivedQuery["fundsTransfers"][number]) => {
      const currency = getCurrency(
        fundsTransfer.application.grant.reward.asset,
        chainId,
        fundsTransfer.application.grant.workspace.tokens,
      );

      const email = {
        to: [fundsTransfer.application.applicantEmail[0].values[0].value],
        cc: [],
        replacementData: JSON.stringify({
          projectName: fundsTransfer.application.projectName[0].values[0].value,
          applicantName:
            fundsTransfer.application.applicantName[0].values[0].value,
          daoName: fundsTransfer.application.grant.workspace.title,
          grantAmount: `${formatAmount(
            fundsTransfer.amount,
            currency.decimal,
          )} ${currency.label}`,
        }),
      };
      emailData.push(email);
    },
  );

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
      grantAmount: "",
    }),
  );

  return true;
}

const handleDiscourse = async (fundsTransfers: OnFundsReceivedQuery["fundsTransfers"], chainId: SupportedChainId) => {
  fundsTransfers.forEach(
    (fundsTransfer: OnFundsReceivedQuery["fundsTransfers"][0]) => {
      const currency = getCurrency(
        fundsTransfer.application.grant.reward.asset,
        chainId,
        fundsTransfer.application.grant.workspace.tokens,
      );
      const data = {
        projectName: fundsTransfer.application.projectName[0].values[0].value,
        applicantName:
          fundsTransfer.application.applicantName[0].values[0].value,
        daoName: fundsTransfer.application.grant.workspace.title,
        grantAmount: `${formatAmount(fundsTransfer.amount, currency.decimal)} ${
          currency.label
        }`,
      };
      let raw = Template.TextPart;
      Object.keys(data).forEach((key: string) => {
        raw = raw.replace(`{{${key}}}`, data[key]);
      });
      addReplyToPost(chainId, fundsTransfer.application.id, raw);
    },
  );
  return true;
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  ALL_SUPPORTED_CHAIN_IDS.forEach(async (chainId: SupportedChainId) => {
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

    if (!results.fundsTransfers || !results.fundsTransfers.length) return;
    const fundsTransfers = results.fundsTransfers.filter(
      (fundsTransfer: OnFundsReceivedQuery["fundsTransfers"][number]) => fundsTransfer.application.applicantEmail.length > 0,
    );

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(fundsTransfers, chainId);
        break;

      default:
        ret = await handleEmail(fundsTransfers, chainId);
    }

    if (ret) await setItem(getKey(chainId), toTimestamp);
  });
};
