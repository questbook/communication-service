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
  OnNewGrantPostedDocument,
  OnNewGrantPostedQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getEmail, getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";

const TEMPLATE = templateNames.applicant.OnNewGrantPosted;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

async function handleEmail(grants: OnNewGrantPostedQuery['grants'], grantApplications: OnNewGrantPostedQuery['grantApplications'], chainId: number) {
  const emailData: EmailData[] = [];
  for (const grant of grants) {
    for (const application of grantApplications) {
      let emailAddresses: string[];
      if (application.applicantEmail.length === 0) {
        emailAddresses = [await getEmail(application.applicantId)];
      } else {
        emailAddresses = application.applicantEmail[0].values.map((item) => item?.value);
      }
      if (!emailAddresses) continue;
      const email = {
        to: emailAddresses,
        cc: [],
        replacementData: JSON.stringify({
          grantName: grant.title,
          daoName: grant.workspace.title,
          applicantName: application.applicantName[0]?.values[0]?.value,
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
    }
  }

  if (emailData.length === 0) {
    return false;
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

  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      continue;
    }

    const results: OnNewGrantPostedQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnNewGrantPostedDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length || !results.grants || !results.grants.length) continue;
    const grantApplications = results.grantApplications.filter((grantApplication: OnNewGrantPostedQuery['grantApplications'][number]) => grantApplication.applicantEmail.length > 0);

    const ret = handleEmail(results.grants, grantApplications, chainId);
    if (ret) { await setItem(getKey(chainId), toTimestamp); }
  }
};
