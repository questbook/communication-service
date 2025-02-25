// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// Failed emails are logged for monitoring.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
} from "../../configs/chains";
import {
  OnApplicationSubmitDocument,
  OnApplicationSubmitQuery,
} from "../../generated/graphql";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { getDomainFromGrantId } from "../utils/linkUtils";
import templateNames from "../../generated/templateNames";

const TEMPLATE = templateNames.applicant.OnApplicationSubmit;
const TEMPLATE_WORKSPACE = templateNames.dao.OnApplicationSubmission;
const Pino = require("pino");

const logger = Pino();

async function handleEmail(
  grantApplications: OnApplicationSubmitQuery["grantApplications"],
): Promise<boolean> {
  const emailData: EmailData[] = [];
  const workspaceMail: EmailData[] = [];
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  for (const application of grantApplications) {
    const emailAddresses = application.applicantEmail[0].values.map((item) => item?.value).filter(Boolean);
    if (!emailAddresses.length) continue;

    // Validate applicant emails
    const validEmails = emailAddresses.filter((email) => emailRegex.test(email) && !email.startsWith("0x"));
    if (!validEmails.length) {
      logger.warn({ applicationId: application.id }, "No valid applicant emails");
      continue;
    }

    // Validate workspace member emails
    const workspaceMails = application.grant.workspace.members
      .filter((member) => member.enabled && member.email && emailRegex.test(member.email) && !member.email.startsWith("0x"))
      .map((member) => member.email!);

    const applicantEmail = {
      to: validEmails,
      cc: [],
      replacementData: JSON.stringify({
        projectName: application.projectName[0].values[0].value || "Unknown Project",
        applicantName: application.applicantName[0].values[0].value || "Unknown Applicant",
        daoName: application.grant.title || "Unknown DAO",
        link: `${getDomainFromGrantId(application?.grant?.id)}/dashboard/?grantId=${application?.grant?.id}&chainId=10&role=community&proposalId=${application?.id}`,
      }),
    };
    emailData.push(applicantEmail);

    if (workspaceMails.length > 0) {
      const daoEmail = {
        to: workspaceMails,
        cc: [],
        replacementData: JSON.stringify({
          daoName: `${application.grant.title} Team` || "Unknown Team",
          applicantName: application.applicantName[0].values[0].value || "Unknown Applicant",
          grantName: application.projectName[0].values[0].value || "Unknown Grant",
          link: `${getDomainFromGrantId(application?.grant?.id)}/dashboard/?grantId=${application?.grant?.id}&chainId=10&role=community&proposalId=${application?.id}`,
        }),
      };
      workspaceMail.push(daoEmail);
    }
  }

  if (emailData.length === 0 && workspaceMail.length === 0) {
    logger.info("No emails to send");
    return true;
  }

  logger.info({ emailDataCount: emailData.length, workspaceMailCount: workspaceMail.length }, "Sending emails");

  let allSuccessful = true;

  // Send applicant emails
  for (const email of emailData) {
    try {
      await sendEmails([email], TEMPLATE, "{}"); // Empty default data handled by replacementData
      logger.info({ to: email.to }, "Applicant email sent successfully");
    } catch (error) {
      logger.error({ error, email }, "Failed to send applicant email");
      allSuccessful = false;
    }
  }

  // Send workspace emails @TODO: Uncomment this when the template is deployed
  // for (const email of workspaceMail) {
  //   try {
  //     await sendEmails([email], TEMPLATE_WORKSPACE, "{}");
  //     // eslint-disable-next-line no-promise-executor-return
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     logger.info({ to: email.to }, "Workspace email sent successfully");
  //   } catch (error) {
  //     logger.error({ error, email }, "Failed to send workspace email");
  //     allSuccessful = false;
  //   }
  // }

  return allSuccessful;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);
  const fromTimestamp = toTimestamp - (5 * 60); // 5 minutes ago

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const results: OnApplicationSubmitQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationSubmitDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) {
      logger.info({ chainId }, "No new applications found");
      continue;
    }

    logger.info({ chainId, count: results.grantApplications.length }, "Processing applications");

    const emailApplications: OnApplicationSubmitQuery["grantApplications"] = results.grantApplications;

    await handleEmail(emailApplications);
  }
};
