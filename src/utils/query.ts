import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { CHAIN_INFO } from '../configs/chainInfo';
import { SupportedChainId } from '../configs/chains';

const Pino = require('pino');

const logger = Pino();

async function executeQuery(
  chainId: SupportedChainId,
  from: number,
  to: number,
  query: DocumentNode,
) {
  logger.info({ chainId, from, to }, 'Executing query');
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
    fetchPolicy: 'network-only',
    variables: {
      lowerLimit: from,
      upperLimit: to,
    },
  });
  const { data } = response;
  logger.info({
    chainId, from, to, data,
  }, 'Executed query');

  return data;
}

async function executeApplicationQuery(chainId: SupportedChainId, applicationIDs: string[], query: DocumentNode) {
  logger.info({ chainId, applicationIDs }, 'Executing application query');
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
    fetchPolicy: 'network-only',
    variables: {
      applicationIDs,
    },
  });
  const { data } = response;
  logger.info({
    chainId, applicationIDs, data,
  }, 'Executed application query');

  return data;
}

export { executeQuery, executeApplicationQuery };
