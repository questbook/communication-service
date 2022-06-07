import { OnChainEvent } from "../../configs/events";
import { fetchData } from "./fetchData";
import trigger from "./trigger";

const Pino = require('pino');

const logger = Pino();

export async function work(type: OnChainEvent, zapKey: string) {
// Fetch env variable
  if (!zapKey) {
    logger.info(`${type.toString()}: NO ENV VARIABLE FOUND`);
    return;
  }

  // Call graphQL endpoint and get the data from all chains
  const data = await fetchData(type);

  // Convert the json data to string
  const dataString = JSON.stringify(data);

  // Trigger the Zapier Endpoint
  await trigger(zapKey, dataString, type.toString());
}
