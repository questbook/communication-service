import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { logger } from "ethers";
import axios from 'axios';
import { reclaimChainName, provider, reclaimChainSymbol } from "../configs/reclaim";

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    const balance = (await provider.getBalance(process.env.RECLAIM_GASTANK_ADDRESS)).toBigInt();

    const str = balance.toString();
    const strBalance = `${str.slice(0, str.length - 18)}.${str.slice(str.length - 18)}`;

    if (balance <= BigInt(10) * BigInt(10 ** 18)) {
      const slackResult = await axios.post(
        process.env.SLACK_WEBHOOK_URL,
        JSON.stringify({
          text: `*Reclaim Gas tank* for ${reclaimChainName} has ${strBalance} ${reclaimChainSymbol} left! Please fill the gas tank ASAP!`,
          username: 'Reclaim Bot',
        }),
      );

      if (slackResult.status !== 200) {
        logger.info('Could not send Slack notif!', slackResult);
      }
    }
  } catch (e) {
    logger.info('Could not get balance', e);
  }
};
