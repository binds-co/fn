// if expression is true f1() otherwise f2()
const _ = require('lodash');

module.exports = function(obj, arrayAttrs) {
  const a = _.find(arrayAttrs, i => !obj.hasOwnProperty(i));

  if (a) {
    return {
      err: true, 
      missing: a
    };
  }

  return { err: false };
};
