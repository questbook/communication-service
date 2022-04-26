import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { CHAIN_INFO } from "../configs/chainInfo";
import { SupportedChainId } from "../configs/chains";
import fetch from "cross-fetch";

const Pino = require("pino");
const logger = Pino();

async function executeQuery(
  chainId: SupportedChainId,
  from: number,
  to: number,
  query: DocumentNode
) {
  logger.info({ chainId, from, to }, "Executing query");
  const link = new HttpLink({
    uri: CHAIN_INFO[chainId].subgraphClientUrl,
    fetch,
  });
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query,
    fetchPolicy: "network-only",
    variables: {
      lowerLimit: from,
      upperLimit: to,
    },
  });
  const { data } = response;
  logger.info({ chainId, from, to, data }, "Executed query");

  return data;
}

export default executeQuery;
