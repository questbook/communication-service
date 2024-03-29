// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../types/EmailData";
import { ALL_SUPPORTED_CHAIN_IDS } from "../../configs/chains";
import {
  OnApplicationAcceptDocument,
  OnApplicationAcceptQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getEmail, getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";
import { addReplyToPost } from "../utils/discourse";
import { Template } from "../../generated/templates/applicant/OnApplicationAccept.json";
import replaceAll from "../utils/string";
import discourseWorkspaces from "../../configs/discord";

const TEMPLATE = templateNames.applicant.OnApplicationAccept;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

async function handleEmail(
  grantApplications: OnApplicationAcceptQuery["grantApplications"],
  chainId: number,
): Promise<boolean> {
  const emailData: EmailData[] = [];
  for (const application of grantApplications) {
    let emailAddress: string[];
    if (application.applicantEmail.length === 0) {
      emailAddress = [await getEmail(application.applicantId)];
    } else {
      emailAddress = application.applicantEmail[0].values.map((item) => item?.value);
    }
    if (!emailAddress) continue;
    const email = {
      to: emailAddress,
      cc: [],
      replacementData: JSON.stringify({
        projectName: application?.projectName[0]?.values[0]?.value,
        applicantName: application?.applicantName[0]?.values[0]?.value,
        daoName: application?.grant?.workspace?.title,
        link: `${getDomain(chainId)}/your_applications`,
      }),
    };
    emailData.push(email);
  }

  if (!emailData.length) {
    return false;
  }

  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      projectName: "",
      applicantName: "",
      daoName: "",
      link: "",
    }),
  );

  return true;
}

const handleDiscourse = async (
  grantApplications: OnApplicationAcceptQuery["grantApplications"],
  chainId: number,
): Promise<boolean> => {
  for (const application of grantApplications) {
    const data = {
      projectName: application?.projectName[0]?.values[0]?.value,
      applicantName: application?.applicantName[0]?.values[0]?.value,
      daoName: application?.grant?.workspace?.title,
      link: `${getDomain(chainId)}/your_applications`,
    };
    let raw = Template.TextPart;
    for (const key of Object.keys(data)) {
      raw = replaceAll(raw, `{{${key}}}`, data[key]);
    }
    await addReplyToPost(chainId, application.id, raw);
  }
  return true;
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      continue;
    }

    const results: OnApplicationAcceptQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationAcceptDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) { continue; }

    const discourseApplications: OnApplicationAcceptQuery["grantApplications"] = [];
    const emailApplications: OnApplicationAcceptQuery["grantApplications"] = [];

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
      const ret = await handleEmail(emailApplications, chainId);
      shouldUpdate = shouldUpdate && ret;
    }
    if (shouldUpdate) await setItem(getKey(chainId), toTimestamp);
  }
};
