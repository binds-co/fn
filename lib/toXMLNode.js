const _ = require('lodash');

const EL_START_CHAR = 'a-zA-Z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0370-' +
  '\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF' +
  '\uF900-\uFDCF\uFDF0-\uFFFD';
const EL_NON_START_CHAR = '\-.0-9\u00B7\u0300-\u036F\u203F\u2040';
const PATTERN = `^([^${EL_START_CHAR}])|^((x|X)(m|M)(l|L))|([^${EL_START_CHAR}${EL_NON_START_CHAR}])`;
const EL_REPLACE_EXP = new RegExp(PATTERN, 'g');
const ESC_XML_VAL = (str) => ('' + str)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/'/g, '&apos;')
  .replace(/"/g, '&quot;');

module.exports = (val, name) => {
  name = name.replace(EL_REPLACE_EXP, '_');
  if (_.isString(val) || _.isNumber(val)) {
    val = ESC_XML_VAL(val);
  }
  if (_.isArray(val)) {
    val = val.map(function(item) {
      return toXMLNode(item, name + '_item');
    }).join('');
  }
  if (_.isPlainObject(val)) {
    var str = '';
    _.forOwn(val, function(v, k) {
      str += toXMLNode(v, k);
    });
    val = str;
  }
  if (_.isUndefined(val)) {val = '';}
  return '<' + name + '>' + val + '</' + name + '>';
};
