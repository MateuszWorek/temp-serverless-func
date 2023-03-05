// domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Our First Netlify Function Example',
  };
};

// body must return string or you need to stringify return
// const person = { name: 'john' };
// exports.handler = async (event, context) => {
//   // console.log(event, context);
//   return {
//     statusCode: 200,
//     body: JSON.stringify(person),
//   };
// };

// callback function, without async
// exports.handler = (event, context, callback) => {
//   callback(null, {
//     statusCode: 200,
//     body: 'Our First Netlify Function Example',
//   });
// };
