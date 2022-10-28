import { CHAIN_INFO } from "../../configs/chains";

export default function getDomain(chainId: number) : string {
  if (CHAIN_INFO[chainId].isTestNetwork) {
    return 'https://beta.questbook.app';
  }
  return 'https://questbook.app';
}
