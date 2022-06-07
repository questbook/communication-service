import {
  ALL_SUPPORTED_CHAIN_IDS,
  SupportedChainId,
} from "../../configs/chains";
import { OnChainEvent } from "../../configs/events";
import { DaoCreatedDocument } from "../../generated/graphql";
import { getItem } from "./db";
import { executeQuery } from "./query";

const Pino = require('pino');

const logger = Pino();

const getKey = (chainId: SupportedChainId, type: OnChainEvent) => `${chainId}_${type}`;

export async function fetchData(type: OnChainEvent) {
  let documentNode = null;
  switch (type) {
    case OnChainEvent.DaoCreated:
      documentNode = DaoCreatedDocument;
      break;

    default:
      break;
  }

  if (!documentNode) {
    logger.info(`NO DOCUMENT NODE FOUND FOR ${type.toString()}`);
    return null;
  }

  const time = new Date();
  const data = {};
  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    let fromTimestamp = await getItem(getKey(chainId, type));
    const toTimestamp = Math.floor(time.getTime() / 1000);

    if (fromTimestamp === -1) {
      fromTimestamp = 0;
    }

    const result = await executeQuery(
      chainId,
      fromTimestamp,
      toTimestamp,
      documentNode,
    );
    data[chainId] = result;
  }
  return data;
}
