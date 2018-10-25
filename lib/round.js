// http://www.jacklmoore.com/notes/rounding-in-javascript/

module.exports = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};
