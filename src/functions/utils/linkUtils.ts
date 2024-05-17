import { CHAIN_INFO } from "../../configs/chains";

const grants = [
  {
    name: 'starknet',
    grants: ['661667585afea0acb56c9f08'],
  },
  {
    name: 'axelar',
    grants: ['661e3bf5ccf6446509d2b308', '661e3ca0f056dd981db4e4a5', '661e3cc3f056dd981db4e6a6', '661e3ce1f056dd981db4e795', '65fad2b01080cbb344dbbf24', '661e3c82f056dd981db4e293', '661e3c40ccf6446509d2c01c'],
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
