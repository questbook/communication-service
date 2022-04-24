const AWS = require('aws-sdk');

async function sendEmails(data: any[], templateName: string, defaultTemplateData: string) {
  var params = {
    Destinations: data.map((item: any) => ({
      Destination: {
        ToAddresses: [item.email],
        CcAddresses: item.cc,
      },
      ReplacementTemplateData: item.replacementData,
    })),
    Source: "Questbook <questbook.app@gmail.com>" /* required */,
    Template: templateName /* required */,
    DefaultTemplateData: defaultTemplateData,
    ReplyToAddresses: [],
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendBulkTemplatedEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  const response = await sendPromise;
  return response;
}

export default sendEmails;