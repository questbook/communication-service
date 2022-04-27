import { SupportedChainId } from '../configs/chains' 

export default function getDomain(chainId: SupportedChainId) : string {
	if(chainId === SupportedChainId.HARMONY_TESTNET_S0 || chainId === SupportedChainId.RINKEBY || chainId === SupportedChainId.POLYGON_TESTNET) {
		return 'https://beta.questbook.app'
	} else {
		return 'https://questbook.app'
	}
}