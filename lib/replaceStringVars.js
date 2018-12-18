const _ = require('lodash');

/**
 * Replace *|var|* vars from string matching fields key-value pair
 * @param {string} str - string to be cleaned
 * @param {object} fields - key-value pair of var and value
 * @returns {string}
 */
module.exports = (str, fields) => {
  if (!_.isString(str)) {
    return str;
  }

  // metadata
  str = _.replace(str, /\*\|((?:(?!\|\*).)+)\|\*/gi, function (match, f) {
    return _.get(fields, f, '');
  });

  return str;
};
