const _ = require('lodash');

module.exports = (event) => {
  const eventData = _.get(event, 'data');

  if (eventData === undefined) {
    return;
  }

  let message = eventData.data ? Buffer.from(eventData.data, 'base64').toString() : eventData;

  if (!message) {
    return;
  }

  if (typeof message === 'string') {
    const originalMessage = message;

    try {
      message = JSON.parse(message);
    } catch (e) {
      message = originalMessage;
    }
  }

  return message;
};
