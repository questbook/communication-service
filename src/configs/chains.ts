import "dotenv/config";

export enum SupportedChainId {
  RINKEBY = 4,
  HARMONY_TESTNET_S0 = 1666700000,
  POLYGON_TESTNET = 80001,
  POLYGON_MAINNET = 137,
  OPTIMISM_MAINNET = 10,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId,
).filter(
  (id) => typeof id === "number"
    && ((process.env.IS_TEST === "true"
      && (id === SupportedChainId.RINKEBY
        || id === SupportedChainId.HARMONY_TESTNET_S0
        || id === SupportedChainId.POLYGON_TESTNET))
      || process.env.IS_TEST === "false")
    && ((process.env.DISCOURSE_TEST === "true"
      && id === SupportedChainId.HARMONY_TESTNET_S0)
      || process.env.DISCOURSE_TEST === "false"),
) as SupportedChainId[];
