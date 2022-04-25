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
import { ApplicationSubmittedDocument } from "../../generated/graphql";
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
          id: `${chainId}_applicant_NewGrantPosted`,
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
      ApplicationSubmittedDocument
    );

    const emailData: {
      to: string[];
      cc: string[];
      replacementData: string;
    }[] = [];
    for (const grant of results.grants) {
      for (const applicant of results.grantApplications) {
        const email = {
          to: applicant.applicantEmail[0].values[0].value,
          cc: [],
          replacementData: JSON.stringify({
            grantName: grant.title,
            daoName: grant.grant.workspace.title,
            applicantName: applicant.applicantName[0].values[0].value,
            grantLink: `https://new.questbook.app/explore_grants/about_grant/?grantId=${grant.id}&chainId=${chainId}`,
            faqLink: "",
            discordServerLink: "",
          }),
        };
        emailData.push(email);
      }
    }

    if (emailData.length > 0) {
      const emailResult = await sendEmails(
        emailData,
        "applicant_NewGrantPosted",
        JSON.stringify({
          grantName: "",
          daoName: "",
          applicantName: "",
          grantLink: ``,
          faqLink: "",
          discordServerLink: "",
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
        });
        console.log("\n");
      }

      const updated = await dynamo
        .put({
          TableName: "communication-touchpoints",
          Item: {
            id: `${chainId}_applicant_NewGrantPosted`,
            timestamp: toTimestamp,
          },
        })
        .promise();

      console.log("Updated in DB: ", updated);
    }
  }
};
