import 'dotenv/config'
import { ALL_SUPPORTED_CHAIN_IDS } from '../src/configs/chains'

function test() {
	console.log(process.env.IS_TEST === 'true')
	console.log(ALL_SUPPORTED_CHAIN_IDS)
}

test()
