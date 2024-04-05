// index.js

exports.handler = async (event, context) => {
  try {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Your logic goes here
    const message = 'Hello, World!';
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message })
    };
  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
