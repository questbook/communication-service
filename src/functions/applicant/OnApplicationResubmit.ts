// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later (implement retry or put it in sqs)

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import { EmailData } from "../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
} from "../../configs/chains";
import {
  OnApplicationResubmitDocument,
  OnApplicationResubmitQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { getDomainFromGrantId } from "../utils/linkUtils";
import { sleep } from "../utils/sleep";

const TEMPLATE = templateNames.dao.OnApplicationResubmission;

async function handleEmail(grantApplications: OnApplicationResubmitQuery['grantApplications']) : Promise<boolean> {
  const emailData: EmailData[] = [];
  let emailsSent = 0;

  for (const application of grantApplications) {
    const workspaceMails = application.grant.workspace.members
      .filter((member) => member.email !== null
        && member.enabled
        && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)
        && !member.email.startsWith("0x"))
      .map((member) => member.email as string);

    if (!workspaceMails.length) continue;

    const email = {
      to: workspaceMails,
      cc: [],
      replacementData: JSON.stringify({
        grantName: application.grant.title,
        applicantName: application.applicantName[0].values[0].value,
        daoName: `${application.grant.title} Team`,
        link: `${getDomainFromGrantId(application?.grant?.id)}/dashboard/?grantId=${application?.grant?.id}&chainId=10&role=community&proposalId=${application?.id}`,
      }),
    };
    emailData.push(email);
  }

  if (emailData.length === 0) {
    logger.info(`No valid emails to send for ${grantApplications.length} applications`);
    return false;
  }

  for (const email of emailData) {
    try {
      await sleep(500); // Add 500ms delay between each email
      await sendEmails(
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
    } catch (error) {
      logger.info(error);
    }
  }

  logger.info(`Successfully sent ${emailsSent}/${emailData.length} emails for ${grantApplications.length} applications`);
  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);
  const fromTimestamp = toTimestamp - (5 * 60); // 5 minutes ago
  let totalApplicationsProcessed = 0;

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const results: OnApplicationResubmitQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationResubmitDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const emailApplications: OnApplicationResubmitQuery["grantApplications"] = [];

    for (const application of results.grantApplications) {
      emailApplications.push(application);
    }

    let shouldUpdate = true;
    totalApplicationsProcessed += emailApplications.length;

    if (emailApplications.length > 0) {
      const ret = await handleEmail(emailApplications);
      shouldUpdate = shouldUpdate && ret;
    }
  }

  logger.info(`Total applications processed: ${totalApplicationsProcessed}`);
};
