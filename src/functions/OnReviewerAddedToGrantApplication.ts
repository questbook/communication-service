import { APIGatewayProxyEvent, Context } from "aws-lambda";
import "dotenv/config";
import { OnChainEvent } from "../configs/events";
import { work } from "./utils/work";

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const type = OnChainEvent.ReviewerAddedToGrantApplication;
  const zapKey = process.env.REVIEWER_ADDED_TO_GRANT_APPLICATION;

  await work(type, zapKey);
};
