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
  OnApplicationRejectDocument,
  OnApplicationRejectQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getDomainFromGrantId } from "../utils/linkUtils";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { sleep } from "../utils/sleep";
import { isValidEmail } from "../utils/isValidEmail";

const TEMPLATE = templateNames.applicant.OnApplicationReject;

async function handleEmail(grantApplications: OnApplicationRejectQuery['grantApplications'], chainId: number) : Promise<boolean> {
  const emailData: EmailData[] = [];
  logger.info(`Processing ${grantApplications.length} applications for chain ${chainId}`);

  for (const application of grantApplications) {
    const emailAddresses = application.applicantEmail[0].values
      .map((item) => item?.value)
      .filter((email): email is string => !!email && isValidEmail(email) && !email.startsWith("0x"));

    if (!emailAddresses.length) {
      logger.info(`Skipping application ${application.id} - no valid email addresses found`);
      continue;
    }

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

  if (!emailData.length) {
    logger.info('No valid emails to send');
    return false;
  }

  logger.info(`Attempting to send ${emailData.length} emails`);
  let successfulEmails = 0;

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
      await sleep(500);
    } catch (error) {
      logger.info(`Error sending email: ${error}`);
    }
  }

  logger.info(`Successfully sent ${successfulEmails} out of ${emailData.length} emails`);
  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);
  const fromTimestamp = toTimestamp - (24 * 60 * 60); // 24 hours ago
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const results: OnApplicationRejectQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationRejectDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const emailApplications: OnApplicationRejectQuery["grantApplications"] = [];

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
