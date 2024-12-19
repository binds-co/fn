/**
 * Validates and formats a phone number in a MongoDB TO ElasticSearch query object.
 *
 *
 * @param {string} key - The key of the field being validated.
 * @param {Object} value - The value of the field, which should be an object containing MongoDB operators as keys.
 * @param {string} mongoOperator - The MongoDB operator (e.g., `$eq`, `$regex`) used in the query.
 * @returns {Object} - The modified field value if formatting was applied, or the original `fValue` if no changes were needed.
 */

const validatePhoneToQuery = (key, value, mongoOperator) => {
    if (key.includes('seedData.from.phone') && value[mongoOperator].startsWith(' ')) {
      const formattedPhoneValue = value[mongoOperator].replace(' ', '+');
      return { [mongoOperator]: formattedPhoneValue };
    }
    return value
  };
  
  module.exports = validatePhoneToQuery;
  