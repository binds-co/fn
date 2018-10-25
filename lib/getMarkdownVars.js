const _ = require('lodash');

/**
 * Get variables within markdown
 * @param {string} str - string to be cleaned
 * @returns {array}
 */
module.exports = (str) => {
  if (!_.isString(str)) {
    return str;
  }

  var fields = [];

  // metadata
  _.replace(str, /\*\|((?:(?!\|\*).)+)\|\*/g, (match, f) => fields.push(f));

  return _.uniq(fields);
};
