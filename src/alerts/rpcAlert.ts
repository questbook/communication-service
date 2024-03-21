import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import axios from "axios";
import { CHAIN_INFO } from "../configs/chains";
import { executeQuery } from "../functions/utils/query";
import { GetMetadataDocument, GetMetadataQuery } from "../generated/graphql";

const RPCs = {
  10: { name: 'optimism-mainnet', endpoints: ['https://opt-mainnet.g.alchemy.com/v2/{{alchemy_key}}'] },
};

const THRESHOLD = 500;

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  for (const chainId in RPCs) {
    if (!(chainId in CHAIN_INFO)) continue;

    const result: GetMetadataQuery = await executeQuery(parseInt(chainId, 10), 0, 0, GetMetadataDocument);

    // eslint-disable-next-line no-underscore-dangle
    const blockNumberFromSubraph = result._meta.block.number;

    const rpc = RPCs[chainId].endpoints[0].replace('{{infura_key}}', process.env.SUBGRAPH_INFURA_API_KEY).replace('{{alchemy_key}}', process.env.SUBGRAPH_ALCHEMY_API_KEY);
    logger.info({ rpc }, 'Checking RPC');
    const rpcResult = await axios.post(
      rpc,
      JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: [],
        id: 83,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (rpcResult.status === 200) {
      const rpcJson = await rpcResult.data;
      const blockNumberFromRpc = parseInt(rpcJson.result, 16);

      const diff = blockNumberFromRpc - blockNumberFromSubraph;
      logger.info({
        chainId, blockNumberFromSubraph, blockNumberFromRpc, diff,
      }, 'Subgraph stat');

      if (diff >= THRESHOLD) {
        // Send message to slack
        const slackResult = await axios.post(
          process.env.SLACK_WEBHOOK_URL,
          JSON.stringify({
            text: `Subgraph for ${RPCs[chainId].name} is behind by ${diff} blocks. Please check.`,
            username: 'RPC Bot',
          }),
        );

        if (slackResult.status !== 200) {
          logger.info('Could not send Slack notif!', slackResult);
        }
      }
    } else {
      logger.info('Could not fetch RPC', chainId);
    }
  }
};
