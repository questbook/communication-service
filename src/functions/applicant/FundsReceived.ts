// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { EmailData } from '../../../types/EmailData'
import { CHAIN_INFO } from '../../configs/chainInfo'
import {
	ALL_SUPPORTED_CHAIN_IDS,
	SupportedChainId,
} from '../../configs/chains'
import { FundsReceivedDocument, WorkspaceMember } from '../../generated/graphql'
import templateNames from '../../generated/templateNames'
import { formatAmount } from '../../utils/formattingUtils'
import { getItem, setItem } from '../db'
import sendEmails from '../email'
import executeQuery from '../query'

const TEMPLATE = templateNames.applicant.FundsReceived
const getKey = (chainId: SupportedChainId) => `${chainId}_${TEMPLATE}`

export const run = async(event: APIGatewayProxyEvent, context: Context) => {
	const time = new Date()

	for(const chainId of ALL_SUPPORTED_CHAIN_IDS) {
		const fromTimestamp = await getItem(getKey(chainId))
		const toTimestamp = Math.floor(time.getTime() / 1000)

		if(fromTimestamp === -1) {
			await setItem(getKey(chainId), toTimestamp)
			continue
		}

		const results = await executeQuery(
			chainId,
			fromTimestamp,
			toTimestamp,
			FundsReceivedDocument
		)

		const emailData: EmailData[] = []
		for(const result of results.fundsTransfers) {
			const currency =
        CHAIN_INFO[chainId].supportedCurrencies[
        	result.application.grant.reward.asset
        ]

			const email = {
				to: result.application.applicantEmail[0].values,
				cc: result.application.grant.workspace.members.map(
					(member: WorkspaceMember) => member.email
				),
				replacementData: JSON.stringify({
					projectName: result.application.projectName[0].values[0].value,
					applicantName: result.application.applicantName[0].values[0].value,
					daoName: result.application.grant.workspace.title,
					grantAmount:
            formatAmount(result.amount, currency.decimals) +
            ' ' +
            currency.label,
				}),
			}
			emailData.push(email)
		}

		if(emailData.length === 0) {
			continue
		}

		const emailResult = await sendEmails(
			emailData,
			TEMPLATE,
			JSON.stringify({
				projectName: '',
				applicantName: '',
				daoName: '',
				grantAmount: '',
			})
		)

		console.log(emailResult.ResponseMetadata)

		for(var i = 0; i < emailResult.Status.length; ++i) {
			console.log({
				chain: SupportedChainId[chainId],
				from: fromTimestamp,
				to: toTimestamp,
				request: emailData[i],
				response: emailResult.Status[i],
			})
			console.log('\n')
		}

		await setItem(getKey(chainId), toTimestamp)
	}
}

export default run
