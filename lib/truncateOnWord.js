const _ = require('lodash');

module.exports = (originalString, charsLimit, ellipsis) => {
  if (!_.isString(originalString)) {return originalString;}

  const trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E' +
    '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F' +
    '\u205F\u2028\u2029\u3000\uFEFF';
  const reg = new RegExp('(?=[' + trimmable + '])');
  let words = originalString.split(reg);
  let wordsCount = 0;

  const includedWords = words.filter(function(word) {
    wordsCount += word.length;
    return wordsCount <= charsLimit;
  });

  let truncatedString = includedWords.join('');

  if (!truncatedString.length) {
    truncatedString = originalString.substring(0, charsLimit);
  }

  if (ellipsis && wordsCount > charsLimit) {
    truncatedString += (ellipsis === true) ? '…' : ellipsis;
  }

  return truncatedString;
}
