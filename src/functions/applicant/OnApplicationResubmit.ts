// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { EmailData } from "../../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../../configs/chains";
import {
  GetGrantApplicationsDocument,
  GetGrantApplicationsQuery,
  OnApplicationResubmitDocument,
  OnApplicationResubmitQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getItem, setItem } from "../utils/db";
import { editPost } from "../utils/discourse";
import sendEmails from "../utils/email";
import { executeApplicationQuery, executeQuery } from "../utils/query";

const TEMPLATE = templateNames.applicant.OnApplicationResubmit;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(grantApplications: OnApplicationResubmitQuery['grantApplications']) : Promise<boolean> {
  const emailData: EmailData[] = [];
  for (const application of grantApplications) {
    const email = {
      to: application.applicantEmail[0].values.map(
        (
          item: OnApplicationResubmitQuery["grantApplications"][0]["applicantEmail"][0]["values"][0],
        ) => item.value,
      ),
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

const handleDiscourse = async (grantApplications: OnApplicationResubmitQuery['grantApplications'], chainId: SupportedChainId) : Promise<boolean> => {
  const applicationIDs: string[] = grantApplications.map(
    (application: OnApplicationResubmitQuery["grantApplications"][number]) => application.id,
  );
  const results: GetGrantApplicationsQuery = await executeApplicationQuery(
    chainId,
    applicationIDs,
    GetGrantApplicationsDocument,
  );

  for (const application of results.grantApplications) {
    await editPost(chainId, application);
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

    const results: OnApplicationResubmitQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationResubmitDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) continue;
    const grantApplications = results.grantApplications.filter((application: OnApplicationResubmitQuery["grantApplications"][number]) => application.applicantEmail.length > 0);

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(grantApplications, chainId);
        break;

      default:
        ret = await handleEmail(grantApplications);
    }

    if (ret) await setItem(getKey(chainId), toTimestamp);
  }
};
