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
  GetGrantApplicationsDocument,
  GetGrantApplicationsQuery,
  OnApplicationSubmitDocument,
  OnApplicationSubmitQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getEmail, getItem, setItem } from "../utils/db";
import { createPost } from "../utils/discourse";
import sendEmails from "../utils/email";
import { executeApplicationQuery, executeQuery } from "../utils/query";
import discourseWorkspaces from "../../configs/discord";

const TEMPLATE = templateNames.applicant.OnApplicationSubmit;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;
const Pino = require("pino");

const logger = Pino();

async function handleEmail(
  grantApplications: OnApplicationSubmitQuery["grantApplications"],
): Promise<boolean> {
  const emailData: EmailData[] = [];
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
        projectName: application.projectName[0].values[0].value,
        applicantName: application.applicantName[0].values[0].value,
        daoName: application.grant.workspace.title,
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
    }),
  );

  return true;
}

async function handleDiscourse(
  grantApplications: OnApplicationSubmitQuery["grantApplications"],
  chainId: number,
): Promise<boolean> {
  const applicationIDs: string[] = grantApplications.map(
    (application: OnApplicationSubmitQuery["grantApplications"][number]) => application.id,
  );
  const results: GetGrantApplicationsQuery = await executeApplicationQuery(
    chainId,
    applicationIDs,
    GetGrantApplicationsDocument,
  );

  for (const application of results.grantApplications) await createPost(chainId, application);
  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      continue;
    }

    const results: OnApplicationSubmitQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationSubmitDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const discourseApplications: OnApplicationSubmitQuery["grantApplications"] = [];
    const emailApplications: OnApplicationSubmitQuery["grantApplications"] = [];

    for (const application of results.grantApplications) {
      const apps = discourseWorkspaces.filter((workspace) => workspace.chainId === chainId && workspace.workspaceId === application.grant.workspace.id);
      if (apps.length > 0) {
        discourseApplications.push(application);
      } else emailApplications.push(application);
    }

    let shouldUpdate = true;
    if (discourseApplications.length > 0) {
      const ret = await handleDiscourse(discourseApplications, chainId);
      shouldUpdate = shouldUpdate && ret;
    }

    if (emailApplications.length > 0) {
      const ret = await handleEmail(emailApplications);
      shouldUpdate = shouldUpdate && ret;
    }
    if (shouldUpdate) await setItem(getKey(chainId), toTimestamp);
  }
};
