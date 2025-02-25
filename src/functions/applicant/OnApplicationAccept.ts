// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import { EmailData } from "../../types/EmailData";
import { ALL_SUPPORTED_CHAIN_IDS } from "../../configs/chains";
import {
  OnApplicationAcceptDocument,
  OnApplicationAcceptQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getDomainFromGrantId } from "../utils/linkUtils";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { sleep } from "../utils/sleep";
import { isValidEmail } from "../utils/isValidEmail";

const TEMPLATE = templateNames.applicant.OnApplicationAccept;

async function handleEmail(
  grantApplications: OnApplicationAcceptQuery["grantApplications"],
  chainId: number,
): Promise<boolean> {
  const emailData: EmailData[] = [];
  let validApplicationCount = 0;
  let successfulEmails = 0;

  logger.info(`Processing ${grantApplications.length} applications for chain ${chainId}`);

  for (const application of grantApplications) {
    const emailAddress = application.applicantEmail[0].values.map((item) => item?.value);
    // Validate email address
    const validEmailAddresses = emailAddress.filter((email) => isValidEmail(email) && !email.startsWith("0x"));
    validApplicationCount += validEmailAddresses.length;

    const email = {
      to: validEmailAddresses,
      cc: [],
      replacementData: JSON.stringify({
        projectName: application?.projectName[0]?.values[0]?.value,
        applicantName: application?.applicantName[0]?.values[0]?.value,
        daoName: application?.grant?.title,
        link: `${getDomainFromGrantId(application?.grant?.id)}/dashboard/?grantId=${application?.grant?.id}&chainId=10&role=community&proposalId=${application?.id}`,
      }),
    };
    emailData.push(email);
  }

  if (!emailData.length) {
    logger.info('No valid emails to send');
    return false;
  }

  logger.info(`Found ${validApplicationCount} valid applications with email addresses`);

  for (const email of emailData) {
    try {
      const emailResult = await sendEmails(
        [email],
        TEMPLATE,
        JSON.stringify({
          projectName: "",
          applicantName: "",
          daoName: "",
          link: "",
        }),
      );
      successfulEmails += 1;
      logger.info(`Successfully sent email ${successfulEmails}/${emailData.length}`);
      await sleep(500); // Add delay before sending each email
    } catch (error) {
      logger.info(`Error sending email: ${error}`);
    }
  }

  logger.info(`Completed sending emails. Success: ${successfulEmails}/${emailData.length}`);
  return successfulEmails > 0;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);
  const fromTimestamp = toTimestamp - (5 * 60); // 5 minutes ago
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const results: OnApplicationAcceptQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationAcceptDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) { continue; }

    const emailApplications: OnApplicationAcceptQuery["grantApplications"] = [];

    for (const application of results.grantApplications) {
      emailApplications.push(application);
    }

    let shouldUpdate = true;

    if (emailApplications.length > 0) {
      const ret = await handleEmail(emailApplications, chainId);
      shouldUpdate = shouldUpdate && ret;
    }
  }
};
