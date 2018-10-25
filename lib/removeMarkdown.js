const _ = require('lodash');
const defaultFields = {
  from: {
    name: 'Nome',
    phone: 'Telefone',
    email: 'E-mail',
  }
};

/**
 * Removes markdown tags from string
 * @param {string} str - string to be cleaned
 * @returns {string}
 */
module.exports = (str, fields, setHTML) => {
  if (!_.isString(str)) {
    return str;
  }

  fields = Object.assign(defaultFields, fields)

  // metadata
  str = _.replace(str, /\*\|((?:(?!\|\*).)+)\|\*/g, function(match, f) {
    return _.get(fields, f, '');
  });

  // bolder & italic
  str = _.replace(str, /\*\*\*((?:(?!\*\*\*).)+)\*\*\*/g, setHTML ? '<b><i>$1</i></b>' : '$1');

  // bolder
  str = _.replace(str, /\*\*((?:(?!\*\*).)+)\*\*/g, setHTML ? '<b>$1</b>' : '$1');

  // italic
  str = _.replace(str, /\*([^*]+)\*/g, setHTML ? '<i>$1</i>' : '$1');

  // underlined
  str = _.replace(str, /\_\_((?:(?!\_\_).)+)\_\_/g, setHTML ? '<u>$1</u>' : '$1');

  // strikeout
  str = _.replace(str, /\~\~((?:(?!\~\~).)+)\~\~/g, setHTML ? '<s>$1</s>' : '$1');

  return str;
};
