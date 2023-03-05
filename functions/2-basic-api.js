// const items = [{ name: 'susan' }, { name: 'anna' }];
const items = require('../assets/data');

exports.handler = async (event, context, callback) => {
  // CORS bug fix
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
