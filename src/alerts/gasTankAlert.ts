import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import axios from 'axios';
import { CHAIN_INFO } from "../configs/chains";

const bicoDapps: { [key: string]: { apiKey: string, threshold: number, symbol: string } } = {
  5: {
    apiKey: 'cCEUGyH2y.37cd0d5e-704c-49e6-9f3d-e20fe5bb13d5',
    threshold: 0.01,
    symbol: 'ETH',
  },
  10: {
    apiKey: 'xc_x_i8x3.7002d254-03f5-427e-b25f-400b52d1d4c9',
    threshold: 0.01,
    symbol: 'ETH',
  },
};

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  for (const chainId in bicoDapps) {
    if (!(chainId in CHAIN_INFO)) continue;

    const result = await axios.get('https://data.biconomy.io/api/v1/dapp/gas-tank-balance', {
      headers: {
        apiKey: bicoDapps[chainId].apiKey,
        authToken: process.env.BICO_AUTH_TOKEN,
      },
    });

    if (result.status === 200) {
      const json = result?.data;
      const balance = json?.dappGasTankData?.effectiveBalanceInStandardForm;
      if (balance === undefined) {
        logger.info('Could not get balance', json);
        continue;
      }

      if (balance < bicoDapps[chainId].threshold) {
        // Send message to slack
        const slackResult = await axios.post(
          process.env.SLACK_WEBHOOK_URL,
          JSON.stringify({
            text: `Gas tank for ${CHAIN_INFO[chainId].name} has ${balance} ${bicoDapps[chainId].symbol} left! Please fill the gas tank!`,
            username: 'Gas tank Bot',
          }),
        );

        if (slackResult.status !== 200) {
          logger.info('Could not send Slack notif!', slackResult);
        }
      }
      logger.info(chainId, balance);
    }
  }
};
