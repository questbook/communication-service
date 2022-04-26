const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE = "communication-touchpoints";

export async function getItem(key: string): Promise<number> {
  const result = await dynamo
    .get({
      TableName: TABLE,
      Key: {
        id: key,
      },
    })
    .promise();

  if (result.Item) {
    return result.Item.timestamp;
  }

  return -1;
}

export async function setItem(key: string, timestamp: number): Promise<void> {
  const updated = await dynamo
    .put({
      TableName: TABLE,
      Item: {
        id: key,
        timestamp,
      },
    })
    .promise();
}
