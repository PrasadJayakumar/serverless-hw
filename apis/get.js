const { handler } = require('../libs/handler.js');
const dynamoDb = require('../libs/dynamoDb.js');

const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      profileId: event.pathParameters.id
    }
  };

  const result = await dynamoDb.get(params);

  if (!result.Item) {
    throw new Error('Profile not found.');
  }

  return result.Item;
});

module.exports = {
  main
};
