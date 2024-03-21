/* eslint-disable no-underscore-dangle */
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import Pino from "pino";
import fetch from "cross-fetch";
import {
  GetSyanpsKeys, GetSynapsKeysQuery, GetSynapsStatus, GetSynapsStatusQuery,
  UpdateSynapsStatus,
} from "../../generated/graphql";
import { executeMutation, executeQueryKYCStatus, executeQuerySynapsKeys } from "../utils/query";

const logger = Pino();

const checkSynapsStatus = async (id: string, key: string, type: 'KYC' | 'KYB', proposalId: string, status: string) => {
  const options = {
    method: 'GET',
    url: type === 'KYC' ? `https://api.synaps.io/v4/individual/session/${id}` : `https://api.synaps.io/v4/corporate/session/${id}`,
    headers: {
      'Api-Key': key,
    },
  };

  const response = await fetch(options.url, {
    method: options.method,
    headers: options.headers,
  });

  const data = await response.json();
  if (data?.session?.status === 'PENDING_VERIFICATION' && status !== 'PENDING_VERIFICATION') {
    logger.info({ data }, `${type} status is pending verification`);
    const res = await executeMutation(UpdateSynapsStatus, {
      id: proposalId,
      status: 'PENDING_VERIFICATION',
    });
    logger.info({ res }, 'Status updated');
  } else if (data?.session?.status === 'APPROVED') {
    logger.info({ data }, `${type} status is approved`);
    const res = await executeMutation(UpdateSynapsStatus, {
      id: proposalId,
      status: 'completed',
    });
    logger.info({ res }, 'Status updated');
  } else if (data?.session?.status === 'REJECTED' || data?.session?.status === 'RESUBMISSION_REQUIRED') {
    logger.info({ data }, `${type} status is rejected`);
    const res = await executeMutation(UpdateSynapsStatus, {
      id: proposalId,
      status: 'rejected',
    });
    logger.info({ res }, 'Status updated');
  } else {
    logger.info({ data }, `${type} status is ${data?.session?.status}`);
  }
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  logger.info({ time }, 'Received event');
  const results: GetSynapsStatusQuery = await executeQueryKYCStatus(
    GetSynapsStatus,
  );

  if (results?.grantApplications?.length > 0) {
    for (const grantApplication of results.grantApplications) {
      const getKey: GetSynapsKeysQuery = await executeQuerySynapsKeys(GetSyanpsKeys, {
        id: grantApplication?.grant?.workspace?.id,
        type: grantApplication?.synapsType,
      });
      if (grantApplication.synapsType === 'KYC') {
        if (getKey?.getSynapsKeys?.keys?.length > 0) {
          await checkSynapsStatus(grantApplication?.synapsId, getKey?.getSynapsKeys?.keys, 'KYC', grantApplication?._id, grantApplication?.synapsStatus);
        }
      } else if (getKey?.getSynapsKeys?.keys?.length > 0) {
        await checkSynapsStatus(grantApplication?.synapsId, getKey?.getSynapsKeys?.keys, 'KYB', grantApplication?._id, grantApplication?.synapsStatus);
      }
    }
  }
  logger.info(results.grantApplications?.length, 'Executed query');
  return true;
};
