exports.handler = async function(event, context) {
  return {
    statusCode: 418,
    body: JSON.stringify({ message: "I'm a Teapot" }),
  };
};
