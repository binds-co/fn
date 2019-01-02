const regex = /([0-9]{5,})\w+/;

module.exports = phone => {
  if (typeof phone === 'string') {
    phone = phone.replace(/\D/g, '');
  }
  return regex.test(phone);
};
