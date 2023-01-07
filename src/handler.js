'use strict';

module.exports.hello = async (event) => {
  // code
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Chanchito feliz!',
        input: event,
      },
      null,
      2
    ),
  };
};
