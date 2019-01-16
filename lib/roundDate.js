module.exports = (minutes, date) => {
  // convert minutes to ms
  let ms = 1000 * 60 * minutes;
  const rounded = Math.round(date.getTime() / ms) * ms;
  return new Date(rounded);
};
