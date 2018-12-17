const regex = /^(\d+)([a-zA-Z ]+)$/;

module.exports = string => {
  if (typeof string !== 'string') { return; }
  const matches = string.match(regex);
  if (!matches || !matches[1] || !matches[2]) { return 0; }
  const howMany = parseInt(matches[1], 10) || 0;
  const unit = matches[2].replace(/\s/g, '') || 'minutes';
  return { howMany, unit };
};
