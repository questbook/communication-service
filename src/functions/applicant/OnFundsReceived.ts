// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS, CHAIN_INFO,
} from "../../configs/chains";
import {
  OnFundsReceivedDocument,
  OnFundsReceivedQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import formatAmount from "../utils/formattingUtils";
import { getEmail, getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { Template } from "../../generated/templates/applicant/OnFundsReceived.json";
import { addReplyToPost } from "../utils/discourse";
import replaceAll from "../utils/string";
import discourseWorkspaces from "../../configs/discord";

const TEMPLATE = templateNames.applicant.OnFundsReceived;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

const getCurrency = (
  key: string,
  chainId: number,
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
  chainId: number,
) {
  const emailData: EmailData[] = [];
  for (const fundsTransfer of fundsTransfers) {
    const currency = getCurrency(
      fundsTransfer.application.grant.reward.asset,
      chainId,
      fundsTransfer.application.grant.workspace.tokens,
    );

    let emailAddresses: string[];
    if (fundsTransfer.application.applicantEmail.length === 0) {
      emailAddresses = [await getEmail(fundsTransfer.application.applicantId)];
    } else {
      emailAddresses = fundsTransfer.application.applicantEmail[0].values.map((item) => item?.value);
    }
    if (!emailAddresses) continue;

    const email = {
      to: emailAddresses,
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
      grantAmount: "",
    }),
  );

  return true;
}

const handleDiscourse = async (fundsTransfers: OnFundsReceivedQuery["fundsTransfers"], chainId: number) => {
  for (const fundsTransfer of fundsTransfers) {
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
    for (const key of Object.keys(data)) {
      raw = replaceAll(raw, `{{${key}}}`, data[key]);
    }
    await addReplyToPost(chainId, fundsTransfer.application.id, raw);
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
      continue;
    }

    const results: OnFundsReceivedQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnFundsReceivedDocument,
    );

    if (!results.fundsTransfers || !results.fundsTransfers.length) continue;
    const discourseApplications: OnFundsReceivedQuery["fundsTransfers"] = [];
    const emailApplications: OnFundsReceivedQuery["fundsTransfers"] = [];

    for (const fundTransfer of results.fundsTransfers) {
      const apps = discourseWorkspaces.filter((workspace) => workspace.chainId === chainId && workspace.workspaceId === fundTransfer.application.grant.workspace.id);
      if (apps.length > 0) discourseApplications.push(fundTransfer);
      else emailApplications.push(fundTransfer);
    }

    let shouldUpdate = true;
    if (discourseApplications.length > 0) {
      const ret = await handleDiscourse(discourseApplications, chainId);
      shouldUpdate = shouldUpdate && ret;
    }

    if (emailApplications.length > 0) {
      const ret = await handleEmail(emailApplications, chainId);
      shouldUpdate = shouldUpdate && ret;
    }
    if (shouldUpdate) await setItem(getKey(chainId), toTimestamp);
  }
};
