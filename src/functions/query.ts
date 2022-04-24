import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { CHAIN_INFO } from "../configs/chainInfo";
import { SupportedChainId } from "../configs/chains";
import fetch from 'cross-fetch';

async function executeQuery(
  chainId: SupportedChainId,
  from: number,
  to: number,
  query: DocumentNode
) {
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

  return response.data;
}

export default executeQuery;
