const { handler } = require('../libs/handler.js');
const dynamoDb = require('../libs/dynamoDb.js');
const uuid = require('uuid');

const main = handler(async (event, context) => {
  console.log('ENVIRONMENT VARIABLES\n' + JSON.stringify(process.env, null, 2));
  console.log('EVENT\n' + JSON.stringify(event, null, 2));

  if (event.body === null && event.body === undefined) {
    return event;
  }

  let data;
  if (event.isBase64Encoded) {
    data = JSON.parse(Buffer.from(event.body, 'base64').toString('utf8'));
  } else {
    data = JSON.parse(event.body);
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      profileId: uuid.v1(),
      createdAt: Date.now(),
      name: data.name
    }
  };

  await dynamoDb.put(params);
  return params.Item;
});

module.exports = {
  main
};
