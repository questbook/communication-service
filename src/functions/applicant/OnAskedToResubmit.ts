// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import { EmailData } from "../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
} from "../../configs/chains";
import {
  OnAskedToResubmitDocument,
  OnAskedToResubmitQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getDomainFromGrantId } from "../utils/linkUtils";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { sleep } from "../utils/sleep";

const TEMPLATE = templateNames.applicant.OnAskedToResubmit;

async function handleEmail(grantApplications: OnAskedToResubmitQuery['grantApplications'], chainId: number) : Promise<boolean> {
  const emailData: EmailData[] = [];
  logger.info(`Processing ${grantApplications.length} applications for chain ${chainId}`);

  for (const application of grantApplications) {
    const emailAddresses = application.applicantEmail[0].values
      .map((item) => item?.value)
      .filter((email): email is string => {
        // Basic email validation
        if (!email) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && !email.startsWith("0x");
      });

    if (!emailAddresses.length) continue;

    const email = {
      to: emailAddresses,
      cc: [],
      replacementData: JSON.stringify({
        projectName: application.projectName[0].values[0].value,
        applicantName: application.applicantName[0].values[0].value,
        daoName: application.grant.title,
        link: `${getDomainFromGrantId(application?.grant?.id)}/dashboard/?grantId=${application?.grant?.id}&chainId=10&role=community&proposalId=${application?.id}`,
      }),
    };
    emailData.push(email);
  }

  if (emailData.length === 0) {
    logger.info('No valid email addresses found to send notifications');
    return false;
  }

  logger.info(`Sending ${emailData.length} emails for chain ${chainId}`);

  // Add delay between sending emails
  let emailsSent = 0;
  for (const email of emailData) {
    try {
      const emailResult = await sendEmails(
        [email], // Send one email at a time
        TEMPLATE,
        JSON.stringify({
          projectName: "",
          applicantName: "",
          daoName: "",
          link: "",
        }),
      );
      emailsSent += 1;
      logger.info(`Successfully sent email ${emailsSent}/${emailData.length}`);
    } catch (error) {
      logger.info(`Failed to send email ${emailsSent + 1}/${emailData.length}:`, error);
    }

    // Wait 500ms before sending the next email
    await sleep(500);
  }

  logger.info(`Completed sending ${emailsSent} out of ${emailData.length} emails for chain ${chainId}`);
  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);
  const fromTimestamp = toTimestamp - (5 * 60); // 5 minutes ago
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const results: OnAskedToResubmitQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnAskedToResubmitDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const emailApplications: OnAskedToResubmitQuery["grantApplications"] = [];

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
