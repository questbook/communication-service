import { CHAIN_INFO } from "../../configs/chains";

const grants = [
  {
    name: 'starknet',
    grants: ['661667585afea0acb56c9f08'],
  },
];

export function getDomain(chainId: number): string {
  if (CHAIN_INFO[chainId].isTestNetwork) {
    return 'https://beta.questbook.app';
  }
  return 'https://questbook.app';
}

export function getDomainFromGrantId(grantId: string): string {
  for (const grant of grants) {
    if (grant.grants.includes(grantId)) {
      return `https://${grant.name}.questbook.app`;
    }
  }
  return 'https://questbook.app';
}
