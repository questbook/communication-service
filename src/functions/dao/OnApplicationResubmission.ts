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
  OnApplicationResubmissionDocument,
  OnApplicationResubmissionQuery,
} from "../../generated/graphql";
import templateNames from "../../generated/templateNames";
import getDomain from "../../utils/linkUtils";
import { getItem, setItem } from "../../utils/db";
import sendEmails from "../../utils/email";
import executeQuery from "../../utils/query";

const TEMPLATE = templateNames.dao.OnApplicationResubmission;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(grantApplications: OnApplicationResubmissionQuery['grantApplications'], chainId: SupportedChainId) : Promise<boolean> {
  const emailData: EmailData[] = [];
  grantApplications.forEach(
    (result: OnApplicationResubmissionQuery["grantApplications"][0]) => {
      const email = {
        to: result.grant.workspace.members.map(
          (
            member: OnApplicationResubmissionQuery["grantApplications"][0]["grant"]["workspace"]["members"][0],
          ) => member.email,
        ),
        cc: [],
        replacementData: JSON.stringify({
          projectName: result.projectName[0].values[0].value,
          applicantName: result.applicantName[0].values[0].value,
          grantName: result.grant.title,
          daoName: result.grant.workspace.title,
          link: `${getDomain(
            chainId,
          )}/your_grants/view_applicants/applicant_form/?commentData=&applicationId=${
            result.id
          }`,
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
      grantName: "",
      daoName: "",
      link: "",
    }),
  );

  return true;
}

const handleDiscourse = async (grantApplications: OnApplicationResubmissionQuery['grantApplications']) => {
  const a = 5;
  return true;
};

const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  ALL_SUPPORTED_CHAIN_IDS.forEach(async (chainId: SupportedChainId) => {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      return;
    }

    const results: OnApplicationResubmissionQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationResubmissionDocument,
    );

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(results.grantApplications);
        break;

      default:
        ret = process.env.DISCOURSE_TEST === 'true' ? false : await handleEmail(results.grantApplications, chainId);
    }
    if (ret) await setItem(getKey(chainId), toTimestamp);
  });
};

export default run;
