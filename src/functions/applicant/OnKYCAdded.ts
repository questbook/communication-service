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
  GetKYCApplications,
  GetKYCApplicationsQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeApplicationQuery, executeQuery, executeQueryKYCStatus } from "../utils/query";
import { getDomainFromGrantId } from "../utils/linkUtils";

const TEMPLATE = templateNames.applicant.OnKYCAdded;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;
const Pino = require("pino");

const logger = Pino();

async function handleEmail(
  grantApplications,
): Promise<boolean> {
  const emailData: EmailData[] = [];
  for (const application of grantApplications) {
    let emailAddresses: string[];
    if (application.email?.values) {
      emailAddresses = application?.email[0]?.values?.map((item) => item?.value);
      logger.info('emailAddresses', emailAddresses);
    }
    if (!emailAddresses) continue;
    const email = {
      to: emailAddresses,
      cc: [],
      replacementData: JSON.stringify({
        projectName: application.projectName[0].values[0].value,
        applicantName: application.name[0].values[0].value,
        daoName: application.grant.title,
        link: `${getDomainFromGrantId(application?.grant?.id)}/dashboard/?grantId=${application?.grant?.id}&chainId=10&role=community&proposalId=${application?.id}`,
        type: `${application?.synapsType}`,
      }),
    };
    emailData.push(email);
  }

  if (emailData.length === 0) {
    return false;
  }
  logger.info("Email data", emailData);
  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      projectName: "",
      applicantName: "",
      daoName: "",
      link: "",
      type: "",
    }),
  );

  logger.info("Email result", emailResult);

  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));
    // const fromTimestamp = 1711982453;
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (Number(fromTimestamp) === -1) {
      await setItem(getKey(chainId), toTimestamp);
      continue;
    }

    const results: GetKYCApplicationsQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      GetKYCApplications,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const emailApplications = [];

    for (const application of results.grantApplications && results.grantApplications) {
      // emailApplications.push(application);
      emailApplications.push(application);
    }

    let shouldUpdate = true;

    if (emailApplications.length > 0) {
      const ret = await handleEmail(emailApplications);
      shouldUpdate = shouldUpdate && ret;
    }
    if (shouldUpdate) await setItem(getKey(chainId), toTimestamp);
  }
};
