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
  OnApplicationSubmissionDocument,
  OnApplicationSubmissionQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../utils/linkUtils";
import { getItem, setItem } from "../utils/db";
import sendEmails from "../utils/email";
import { executeQuery } from "../utils/query";

const TEMPLATE = templateNames.dao.OnApplicationSubmission;
const getKey = (chainId: number) => `${chainId}_${TEMPLATE}`;

async function handleEmail(grantApplications: OnApplicationSubmissionQuery['grantApplications'], chainId: number) : Promise<boolean> {
  const emailData: EmailData[] = [];
  for (const application of grantApplications) {
    const email = {
      to: application.grant.workspace.members.map(
        (
          member: OnApplicationSubmissionQuery["grantApplications"][0]["grant"]["workspace"]["members"][0],
        ) => member.email,
      ),
      cc: [],
      replacementData: JSON.stringify({
        projectName: application.projectName[0].values[0].value,
        applicantName: application.applicantName[0].values[0].value,
        grantName: application.grant.title,
        daoName: application.grant.workspace.title,
        link: `${getDomain(
          chainId,
        )}/your_grants/view_applicants/applicant_form/?commentData=&applicationId=${
          application.id
        }`,
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
      grantName: "",
      daoName: "",
      link: "",
    }),
  );
  return true;
}

const handleDiscourse = async (grantApplications: OnApplicationSubmissionQuery['grantApplications']) => {
  const a = 5;
  return false;
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

    const results: OnApplicationSubmissionQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationSubmissionDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const grantApplications = results.grantApplications.filter((grantApplication: OnApplicationSubmissionQuery['grantApplications'][number]) => grantApplication.applicantEmail.length > 0);

    const ret = await handleEmail(grantApplications, chainId);
    if (ret) await setItem(getKey(chainId), toTimestamp);
  }
};
