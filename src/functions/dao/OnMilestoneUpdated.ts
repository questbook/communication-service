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
import { OnMilestoneUpdatedDocument, OnMilestoneUpdatedQuery } from '../../generated/graphql';
import templateNames from '../../generated/templateNames';
import getDomain from '../../utils/linkUtils';
import { getItem, setItem } from '../../utils/db';
import sendEmails from '../../utils/email';
import { executeQuery } from '../../utils/query';

const TEMPLATE = templateNames.dao.OnMilestoneUpdated;
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`;

async function handleEmail(applicationMilestones: OnMilestoneUpdatedQuery['applicationMilestones'], chainId: SupportedChainId) : Promise<boolean> {
  const emailData: EmailData[] = [];
  applicationMilestones.forEach((result: OnMilestoneUpdatedQuery['applicationMilestones'][0]) => {
    const email = {
      to: result.application.grant.workspace.members.map(
        (member: OnMilestoneUpdatedQuery['applicationMilestones'][0]['application']['grant']['workspace']['members'][0]) => member.email,
      ),
      cc: [],
      replacementData: JSON.stringify({
        projectName: result.application.projectName[0].values[0].value,
        applicantName: result.application.applicantName[0].values[0].value,
        daoName: result.application.grant.workspace.title,
        grantName: result.application.grant.title,
        link: `${getDomain(chainId)}/your_grants/view_applicants/manage/?applicationId=${result.application.id}`,
      }),
    };
    emailData.push(email);
  });

  if (emailData.length === 0) {
    return false;
  }

  const emailResult = await sendEmails(
    emailData,
    TEMPLATE,
    JSON.stringify({
      projectName: '',
      applicantName: '',
      daoName: '',
      grantName: '',
      link: '',
    }),
  );

  return true;
}

const handleDiscourse = async (applicationMilestones: OnMilestoneUpdatedQuery['applicationMilestones']) : Promise<boolean> => {
  const a = 5;
  return false;
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

    const results : OnMilestoneUpdatedQuery = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      OnMilestoneUpdatedDocument,
    );

    if (!results.applicationMilestones || !results.applicationMilestones.length) return;

    let ret: boolean;
    switch (chainId) {
      case SupportedChainId.HARMONY_TESTNET_S0:
        ret = await handleDiscourse(results.applicationMilestones);
        break;

      default:
        ret = await handleEmail(results.applicationMilestones, chainId);
    }
    if (ret) await setItem(getKey(chainId), toTimestamp);
  });
};
