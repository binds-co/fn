module.exports = data => {
  const eventData = data;

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
