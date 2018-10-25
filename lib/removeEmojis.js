const _ = require('lodash');

module.exports = (str) => {
  if (!_.isString(str)) {
    return str;
  }

  const regex = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g;

  return _.replace(str, regex, '');
};
