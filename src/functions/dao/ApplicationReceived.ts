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
import { GetReceivedApplicationsDocument } from "../../generated/graphql";
import sendEmails from "../email";
import executeQuery from "../query";

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event, context) => {
  const time = new Date();

  for (const chainId of ALL_SUPPORTED_CHAIN_IDS) {
    const data = await dynamo
      .get({
        TableName: "communication-touchpoints",
        Key: {
          id: `${chainId}_dao_ApplicationReceived`,
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
      GetReceivedApplicationsDocument
    );

    const emailData: {
      to: string[];
      cc: string[];
      replacementData: string;
    }[] = [];
    for (const result of results.grantApplications) {
      const email = {
        to: result.grant.workspace.members.map((member: any) => member.email),
        cc: [],
        replacementData: JSON.stringify({
          projectName: result.projectName[0].values[0].value,
          applicantName: result.applicantName[0].values[0].value,
          grantName: result.grant.title,
          daoName: result.grant.workspace.title,
          link: 'https://new.questbook.app/',
        }),
      };
      emailData.push(email);
    }

      if (emailData.length > 0) {
        const emailResult = await sendEmails(
          emailData,
          "dao_ApplicationReceived",
          JSON.stringify({
            projectName: '',
            applicantName: '',
            grantName: '',
            daoName: '',
            link: '',
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
            id: `${chainId}_dao_ApplicationReceived`,
            timestamp: toTimestamp
          },
        })
        .promise();

        console.log('Updated in DB: ', updated);
      }
  }
};
