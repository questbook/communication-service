import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { CHAIN_INFO } from '../../configs/chains';

const Pino = require('pino');

const logger = Pino();

async function executeQuery(
  chainId: number,
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

async function executeApplicationQuery(chainId: number, applicationIDs: string[], query: DocumentNode) {
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

async function executeQueryKYCStatus(query: DocumentNode) {
  logger.info('Executing query for KYC status');
  const link = new HttpLink({
    uri: 'https://api-grants.questbook.app/graphql',
    fetch,
  });
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query,
    fetchPolicy: 'network-only',
  });
  const { data } = response;
  logger.info({ data }, 'Executed query for KYC status');

  return data;
}

async function executeQuerySynapsKeys(query: DocumentNode, variables: {
  id: string,
  type: string,
}) {
  logger.info('Executing query for Synaps keys');
  const link = new HttpLink({
    uri: 'https://api-grants.questbook.app/graphql',
    fetch,
  });
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query,
    fetchPolicy: 'network-only',
    variables,
    context: {
      headers: {
        Authorization: process.env.API_KEY,
      },
    },
  });
  const { data } = response;
  logger.info({ data }, 'Executed query for Synaps keys');

  return data;
}

async function executeMutation(query: DocumentNode, variables: any) {
  logger.info('Executing mutation');
  const link = new HttpLink({
    uri: 'https://api-grants.questbook.app/graphql',
    fetch,
  });
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  const response = await client.mutate({
    mutation: query,
    variables,
    context: {
      headers: {
        Authorization: process.env.API_KEY,
      },
    },
  });
  const { data } = response;
  logger.info({ data }, 'Executed mutation');

  return data;
}

export {
  executeQuery, executeApplicationQuery, executeQueryKYCStatus, executeQuerySynapsKeys, executeMutation,
};
