module.exports = (date, hours) => {
  let copiedDate = new Date(date);
  copiedDate.setUTCHours(copiedDate.getUTCHours() + hours || 0);
  return copiedDate; 
}
