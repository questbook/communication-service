import { APIGatewayProxyEvent, Context } from "aws-lambda";
import "dotenv/config";
import { OnChainEvent } from "../configs/events";
import { work } from "./utils/work";

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const type = OnChainEvent.ApplicationUpdate;
  const zapKey = process.env.APPLICATION_UPDATE;

  await work(type, zapKey);
};
