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
  GetGrantApplicationsQuery,
  OnApplicationRejectDocument,
  OnApplicationRejectQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getEmail, getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeApplicationQuery, executeQuery } from "../utils/query";
import { Template } from "../../generated/templates/applicant/OnApplicationReject.json";
import { addReplyToPost } from "../utils/discourse";
import replaceAll from "../utils/string";

const TEMPLATE = templateNames.applicant.OnApplicationReject;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

async function handleEmail(grantApplications: OnApplicationRejectQuery['grantApplications'], chainId: number) : Promise<boolean> {
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
        link: `${getDomain(
          chainId,
        )}/your_applications/grant_application/?applicationId=${
          application.id
        }&chainId=${chainId}`,
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

const handleDiscourse = async (grantApplications: OnApplicationRejectQuery['grantApplications'], chainId: number) : Promise<boolean> => {
  for (const application of grantApplications) {
    const data = {
      projectName: application.projectName[0].values[0].value,
      applicantName: application.applicantName[0].values[0].value,
      daoName: application.grant.workspace.title,
      link: `${getDomain(
        chainId,
      )}/your_applications/grant_application/?applicationId=${
        application.id
      }&chainId=${chainId}`,
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

    const results: OnApplicationRejectQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationRejectDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const grantApplications = results.grantApplications.filter((application: OnApplicationRejectQuery["grantApplications"][number]) => application.applicantEmail.length > 0);

    const ret = await handleEmail(grantApplications, chainId);
    if (ret) await setItem(getKey(chainId), toTimestamp);
  }
};
