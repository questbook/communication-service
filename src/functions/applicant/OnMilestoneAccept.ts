// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { EmailData } from '../../../types/EmailData'
import {
	ALL_SUPPORTED_CHAIN_IDS,
	SupportedChainId,
} from '../../configs/chains'
import {
	OnMilestoneAcceptedDocument,
	OnMilestoneAcceptedQuery, } from '../../generated/graphql'
import templateNames from '../../generated/templateNames'
import { getItem, setItem } from '../db'
import sendEmails from '../email'
import executeQuery from '../query'

const TEMPLATE = templateNames.applicant.OnMilestoneAccept
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

		const results : OnMilestoneAcceptedQuery = await executeQuery(
			chainId,
			fromTimestamp,
			toTimestamp,
			OnMilestoneAcceptedDocument
		)

		const emailData: EmailData[] = []
		for(const result of results.applicationMilestones) {
			const email = {
				to: result.application.applicantEmail[0].values.map(
					(item: OnMilestoneAcceptedQuery['applicationMilestones'][0]['application']['applicantEmail'][0]['values'][0]) => item.value
				),
				cc: [],
				replacementData: JSON.stringify({
					applicantName: result.application.applicantName[0].values[0].value,
					daoName: result.application.grant.workspace.title
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
				applicantName: '',
				daoName: '',
			})
		)

		await setItem(getKey(chainId), toTimestamp)
	}
}

export default run
