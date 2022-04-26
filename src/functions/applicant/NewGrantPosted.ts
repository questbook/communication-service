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
import { NewGrantPostedDocument } from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getItem, setItem } from "../db";
import sendEmails from "../email";
import executeQuery from "../query";

const TEMPLATE = templateNames.applicant.NewGrantPosted;
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
      NewGrantPostedDocument
    );

    const emailData: EmailData[] = [];
    for (const grant of results.grants) {
      for (const applicant of results.grantApplications) {
        console.log(grant);
        console.log(applicant);
        const email = {
          to: applicant.applicantEmail[0]?.values[0]?.value,
          cc: [],
          replacementData: JSON.stringify({
            grantName: grant.title,
            daoName: grant.workspace.title,
            applicantName: applicant.applicantName[0]?.values[0]?.value,
            grantLink: `https://new.questbook.app/explore_grants/about_grant/?grantId=${grant.id}&chainId=${chainId}`,
            faqLink:
              "https://www.notion.so/questbook/Grant-DAO-Wiki-e844026ab4344b67b447a7aa390ae053",
            discordServerLink: "https://discord.gg/YkG4Y5ABEu",
          }),
        };
        emailData.push(email);
      }
    }

    if (emailData.length === 0) continue;
    const emailResult = await sendEmails(
      emailData,
      TEMPLATE,
      JSON.stringify({
        grantName: "",
        daoName: "",
        applicantName: "",
        grantLink: ``,
        faqLink: "",
        discordServerLink: "",
      })
    );

    await setItem(getKey(chainId), toTimestamp);
  }
};

export default run;
