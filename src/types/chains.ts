/* eslint-disable no-tabs */
export interface ChainInfo {
	readonly id: number
	readonly name: string
	readonly isTestNetwork?: boolean
	readonly supportedCurrencies: {
		[address: string]: {
			label: string
			address: string
			decimal: number
		}
	}
	readonly subgraphClientUrl: string
}

export type ChainInfoMap = { readonly [chainId: string]: ChainInfo }
