// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import { EmailData } from "../../../types/EmailData";
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../../configs/chains";
import {
  GetGrantApplicationsDocument,
  GetGrantApplicationsQuery,
  OnApplicationSubmitDocument,
  OnApplicationSubmitQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import { getItem, setItem } from "../../utils/db";
import { createPost } from "../../utils/discourse";
import sendEmails from "../../utils/email";
import { executeApplicationQuery, executeQuery } from "../../utils/query";

const TEMPLATE = templateNames.applicant.OnApplicationSubmit;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(
  grantApplications: OnApplicationSubmitQuery["grantApplications"],
): Promise<boolean> {
  const emailData: EmailData[] = [];
  grantApplications.forEach(
    (application: OnApplicationSubmitQuery["grantApplications"][number]) => {
      const email = {
        to: application.applicantEmail[0].values.map(
          (
            item: OnApplicationSubmitQuery["grantApplications"][number]["applicantEmail"][number]["values"][number],
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
    },
  );

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
  chainId: SupportedChainId,
): Promise<boolean> {
  const applicationIDs: string[] = grantApplications.map(
    (application: OnApplicationSubmitQuery["grantApplications"][number]) => application.id,
  );
  const results: GetGrantApplicationsQuery = await executeApplicationQuery(
    chainId,
    applicationIDs,
    GetGrantApplicationsDocument,
  );
  results.grantApplications.forEach(
    async (
      application: GetGrantApplicationsQuery["grantApplications"][number],
    ) => {
      await createPost(chainId, application);
    },
  );
  return true;
}

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  const toTimestamp = Math.floor(time.getTime() / 1000);

  ALL_SUPPORTED_CHAIN_IDS.forEach(async (chainId: SupportedChainId) => {
    const fromTimestamp = await getItem(getKey(chainId));

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      return;
    }

    const results: OnApplicationSubmitQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationSubmitDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) return;
    const grantApplications = results.grantApplications.filter((application: OnApplicationSubmitQuery["grantApplications"][number]) => application.applicantEmail.length > 0);

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(grantApplications, chainId);
        break;

      default:
        ret = await handleEmail(grantApplications);
    }

    if (ret) await setItem(getKey(chainId), toTimestamp);
  });
};
