import "dotenv/config";
import { fetch } from "cross-fetch";

const Pino = require('pino');

const logger = Pino();

async function trigger(key: string, data: string, type: string) {
  const appId = process.env.APP_ID;
  if (!appId) {
    return;
  }
  const url = `https://hooks.zapier.com/hooks/catch/${appId}/${key}/`;

  const requestOptions = {
    method: "POST",
    headers: {},
    body: data,
  };

  const response = await fetch(url, requestOptions);
  const { status } = response;
  const json = await response.json();
  logger.info({ status }, `${type}: Reponse status`);
  logger.info({ json }, `${type}: Reponse json`);
}

export default trigger;
