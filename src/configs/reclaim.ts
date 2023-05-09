import { ethers } from "ethers";

export const reclaimChainId = 420;
export const reclaimChainName = 'Optimism Goerli';
export const reclaimChainSymbol = 'Eth';
export const reclaimThreshold = 5 * 10 ** 17;

export const provider = new ethers.providers.JsonRpcProvider(
  process.env.RECLAIM_PROVIDER_BASE_URL + process.env.RECLAIM_PROVIDER_API_KEY,
);
