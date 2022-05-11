// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { EmailData } from '../../../types/EmailData';
import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from '../../configs/chains';
import {
  OnApplicationAcceptDocument,
  OnApplicationAcceptQuery,
} from '../../generated/graphql';
import templateNames from '../../generated/templateNames';
import getDomain from '../../utils/linkUtils';
import { getItem, setItem } from '../../utils/db';
import sendEmails from '../../utils/email';
import { executeQuery } from '../../utils/query';
import { addReplyToPost } from '../../utils/discourse';
import { Template } from "../../generated/templates/applicant/OnApplicationAccept.json";

const TEMPLATE = templateNames.applicant.OnApplicationAccept;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(grantApplications: OnApplicationAcceptQuery['grantApplications'], chainId: SupportedChainId) : Promise<boolean> {
  const emailData: EmailData[] = [];
  grantApplications.forEach(
    (application: OnApplicationAcceptQuery['grantApplications'][0]) => {
      const email = {
        to: application.applicantEmail[0].values.map(
          (
            item: OnApplicationAcceptQuery['grantApplications'][0]['applicantEmail'][0]['values'][0],
          ) => item?.value,
        ),
        cc: [],
        replacementData: JSON.stringify({
          projectName: application?.projectName[0]?.values[0]?.value,
          applicantName: application?.applicantName[0]?.values[0]?.value,
          daoName: application?.grant?.workspace?.title,
          link: `${getDomain(chainId)}/your_applications`,
        }),
      };
      emailData.push(email);
    },
  );

  if (!emailData.length) {
    return false;
  }

  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      projectName: '',
      applicantName: '',
      daoName: '',
      link: '',
    }),
  );

  return true;
}

const handleDiscourse = async (grantApplications: OnApplicationAcceptQuery['grantApplications'], chainId: SupportedChainId) : Promise<boolean> => {
  grantApplications.forEach((application: OnApplicationAcceptQuery['grantApplications'][0]) => {
    const data = {
      projectName: application?.projectName[0]?.values[0]?.value,
      applicantName: application?.applicantName[0]?.values[0]?.value,
      daoName: application?.grant?.workspace?.title,
      link: `${getDomain(chainId)}/your_applications`,
    };
    let raw = Template.TextPart;
    Object.keys(data).forEach((key: string) => {
      raw = raw.replace(`{{${key}}}`, data[key]);
    });
    addReplyToPost(chainId, application.id, raw.replace("{{daoName}}", application?.grant?.workspace?.title));
  });
  return true;
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();

  ALL_SUPPORTED_CHAIN_IDS.forEach(async (chainId: SupportedChainId) => {
    const fromTimestamp = await getItem(getKey(chainId));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      await setItem(getKey(chainId), toTimestamp);
      return;
    }

    const results: OnApplicationAcceptQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnApplicationAcceptDocument,
    );

    if (!results.grantApplications || !results.grantApplications.length) return;
    const grantApplications = results.grantApplications.filter((application: OnApplicationAcceptQuery["grantApplications"][number]) => application.applicantEmail.length > 0);

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(grantApplications, chainId);
        break;

      default:
        ret = await handleEmail(grantApplications, chainId);
    }
    if (ret) await setItem(getKey(chainId), toTimestamp);
  });
};
