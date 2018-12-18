const emailMatcher = /([+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

module.exports = email => {
  const emails = email.match(emailMatcher);
  return Array.isArray(emails) ? emails.shift() : '';
};
