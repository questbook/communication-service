/* eslint-disable no-underscore-dangle */
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import Pino from "pino";
import {
  GetHelloSignProposals, GetHelloSignProposalsQuery,
  UpdateHelloSignStatus,
} from "../../generated/graphql";
import { executeMutation, executeQueryKYCStatus } from "../utils/query";

const logger = Pino();

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const time = new Date();
  logger.info({ time }, 'Received event');
  const results: GetHelloSignProposalsQuery = await executeQueryKYCStatus(
    GetHelloSignProposals,
  );

  if (results?.grantApplications?.length > 0) {
    for (const grantApplication of results.grantApplications) {
      const res = await executeMutation(UpdateHelloSignStatus, {
        id: grantApplication?._id,
        workspaceId: grantApplication?.grant?.workspace?.id,
        creatorId: grantApplication?.grant?.creatorId,
      });
      logger.info({ res }, 'Status ');
    }
  }
  logger.info(results.grantApplications?.length, 'Executed query');
  return true;
};
