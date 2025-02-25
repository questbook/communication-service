import { CHAIN_INFO } from "../../configs/chains";

const grants = [
  {
    name: 'starknet',
    grants: ['661667585afea0acb56c9f08'],
  },
  {
    name: 'ens',
    grants: ['6619151a3a7a91313846ed80'],
  },
  {
    name: 'axelar',
    grants: ['661e3ce1f056dd981db4e795', '661e3cc3f056dd981db4e6a6', '65fad2b01080cbb344dbbf24', '661e3c82f056dd981db4e293', '661e3bf5ccf6446509d2b308', '669778c4e1827e9ac9693bf5', '661e3ca0f056dd981db4e4a5'],
  },
  {
    name: 'arbitrum',
    grants: [
      "0x4494cf7375aa61c9a483259737c14b3dba6c04e6",
      "0x650b4a0dc2aec18f55adb72f13c5d95631db04be",
      "0x706bc8efecb6002f00a052fe5688d0eb89ea45f4",
      "0xbf93fc6825b5e9ba9a3d7fcf3d14cdfcf3b4c734",
      "662f30eb1c1eb9145098a15e",
      "662f31c25488d5000f055a54",
      "662f323d5488d5000f055e6d",
      "662f32a15488d5000f0562b3",
      "671a105a2047c84bb8a73770",
    ],
  },
  {
    name: 'compoundgrants',
    grants: [
      "0x291d6eb5de3b023ce9b760ef251b303c0c0fd11a",
      "0x3b16764826f0baa77226327c7c0d7d53f8541913",
      "0xad96ce667e2a09311b439dbdcfcdefd2f98898df",
      "0xeb047900b28a9f90f3c0e65768b23e7542a65163",
      "66f29bb58868f5130abc054d",
      "66f29c288868f5130abc112c",
      "66f29c612047c84bb8f7c1fc",
      "66f29cb82047c84bb8f7d540",
    ],
  },
  {
    name: 'polygon',
    grants: ['67816583faef5017a85a8e1c', '678165c0faef5017a85a8fd0', '678165f28f4a6bf4052050bc', '6781662afaef5017a85a93b1', '678166628f4a6bf405205494', '67816695faef5017a85a993c', '65eb4d301080cbb3447f4b4f', '67adba795fe214b433e751e0'],
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
