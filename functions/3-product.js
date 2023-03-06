const Airtable = require('airtable-node');
require('dotenv').config();

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appKAI4dvpSNMfXxO')
  .table('products');

exports.handler = async (event, context, callback) => {
  console.log(event);
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      // console.log(product);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server error`,
      };
    }
  }
  return {
    statusCode: 400,
    body: 'Please provide product id',
  };
};
