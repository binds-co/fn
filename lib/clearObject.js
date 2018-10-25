const _ = require('lodash');

/**
 * cleaner
 *
 * Remove _id from object(deep), 
 * also accept an array of additional fields to be removed
 *
 * @param obj
 * @param fields
 * @returns {object}
 */
const cleaner =  (obj, fields) => {
  if (_.isArray(obj)) {
    return _.map(obj, _.partialRight(cleaner, fields));
  }

  fields = Array.isArray(fields) ? fields : ['_id'];

  let newObject = {};

  _.forOwn(obj, (v, k) => {
    if (fields.indexOf(k) !== -1) {
      return;
    }

    if (_.isArray(v)) {
      v = _.map(v, _.partialRight(cleaner, fields));
    }

    if (_.isPlainObject(v)) {
      newObject[k] = cleaner(v);
    } else {
      newObject[k] = v;
    }
  });

  return newObject;
};

module.exports = cleaner;

