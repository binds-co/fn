const emailMatcher = /([+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
const _ = require('lodash');

module.exports = email => {
  if (_.isEmpty(email) || !email.match) {
    return '';
  }

  const emails = email.match(emailMatcher);
  return Array.isArray(emails) ? emails.shift() : '';
};
