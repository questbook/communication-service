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
  OnNewGrantPostedDocument,
  OnNewGrantPostedQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../../utils/linkUtils";
import { getItem, setItem } from "../../utils/db";
import sendEmails from "../../utils/email";
import executeQuery from "../../utils/query";

const TEMPLATE = templateNames.applicant.OnNewGrantPosted;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(chainId: SupportedChainId, time: Date) {
  const fromTimestamp = await getItem(getKey(chainId));
  const toTimestamp = Math.floor(time.getTime() / 1000);

  if (fromTimestamp === -1) {
    await setItem(getKey(chainId), toTimestamp);
    return;
  }

  const results: OnNewGrantPostedQuery = await executeQuery(
    chainId,
    fromTimestamp,
    toTimestamp,
    OnNewGrantPostedDocument,
  );

  const emailData: EmailData[] = [];
  results.grants.forEach((grant: OnNewGrantPostedQuery["grants"][0]) => {
    results.grantApplications.forEach((applicant: OnNewGrantPostedQuery["grantApplications"][0]) => {
      const email = {
        to: [applicant.applicantEmail[0]?.values[0]?.value],
        cc: [],
        replacementData: JSON.stringify({
          grantName: grant.title,
          daoName: grant.workspace.title,
          applicantName: applicant.applicantName[0]?.values[0]?.value,
          grantLink: `${getDomain(
            chainId,
          )}/explore_grants/about_grant/?grantId=${
            grant.id
          }&chainId=${chainId}`,
          faqLink:
            "https://www.notion.so/questbook/Grant-DAO-Wiki-e844026ab4344b67b447a7aa390ae053",
          discordServerLink: "https://discord.gg/YkG4Y5ABEu",
        }),
      };
      emailData.push(email);
    });
  });

  if (emailData.length === 0) {
    return;
  }

  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      grantName: "",
      daoName: "",
      applicantName: "",
      grantLink: "",
      faqLink: "",
      discordServerLink: "",
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
