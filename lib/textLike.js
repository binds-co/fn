module.exports = function textLike(str) {
  const escaped = str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  return new RegExp(escaped, 'i');
};
