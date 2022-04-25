// In this module, we execute the GraphQL query and
// send the result to the email module to process and
// wait for a reply. If it replies with a success message,
// we modify the timestamp till which we have processed.
// TODO: Process the failed email messages. Put them in a queue and process later.

import {
    ALL_SUPPORTED_CHAIN_IDS,
    GENESIS_TIMESTAMP,
    SupportedChainId,
  } from "../../configs/chains";
  import { FundsReceivedDocument } from "../../generated/graphql";
  import sendEmails from "../email";
  import executeQuery from "../query";
  import {CHAIN_INFO} from "../../configs/chainInfo";
import { formatAmount } from "../../utils/formattingUtils";
  
  const AWS = require("aws-sdk");
  const dynamo = new AWS.DynamoDB.DocumentClient();

  module.exports.run = async (event, context) => {
    const time = new Date();
  
    for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
      const data = await dynamo
        .get({
          TableName: "communication-touchpoints",
          Key: {
            id: `${chainId}_applicant_FundsReceived`,
          },
        })
        .promise();
  
      let fromTimestamp = 0;
      if ("Item" in data) fromTimestamp = data.Item.timestamp;
      else fromTimestamp = GENESIS_TIMESTAMP;
  
      const toTimestamp = Math.floor(time.getTime() / 1000);
      const results = await executeQuery(
        chainId,
        fromTimestamp,
        toTimestamp,
        FundsReceivedDocument
      );
  
      const emailData: {
        to: string[];
        cc: string[];
        replacementData: string;
      }[] = [];
      for (const result of results.fundsTransfers) {
        const currency = CHAIN_INFO[chainId].supportedCurrencies[result.application.grant.reward.asset];

        const email = {
          to: result.application.applicantEmail[0].values,
          cc: result.application.grant.workspace.members.map((member: any) => member.email),
          replacementData: JSON.stringify({
            projectName: result.application.projectName[0].values[0].value,
            applicantName: result.application.applicantName[0].values[0].value,
            daoName: result.application.grant.workspace.title,
            grantAmount: formatAmount(result.amount, currency.decimals) + ' ' + currency.label
          }),
        };
        emailData.push(email);
      }
  
        if (emailData.length > 0) {
          const emailResult = await sendEmails(
            emailData,
            "applicant_ApplicationResubmit",
            JSON.stringify({
              projectName: '',
              applicantName: '',
              daoName: '',
              grantAmount: '',
            })
          );
  
          console.log(emailResult.ResponseMetadata);
  
          for (var i = 0; i < emailResult.Status.length; ++i) {
            console.log({
              chain: SupportedChainId[chainId],
              from: fromTimestamp,
              to: toTimestamp,
              request: emailData[i],
              response: emailResult.Status[i],
            })
            console.log('\n');
          }
  
          const updated = await dynamo
          .put({
            TableName: "communication-touchpoints",
            Item: {
              id: `${chainId}_applicant_FundsReceived`,
              timestamp: toTimestamp
            },
          })
          .promise();
  
          console.log('Updated in DB: ', updated);
        }
    }
  };
  