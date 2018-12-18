const _ = require('lodash');

module.exports = phone => {
  const startsWithPlus = _.startsWith(phone, '+');
  phone = _.replace(_.replace(phone, /[^\d]/g, ''), /^0+/, '');

  if (startsWithPlus) {
    phone = `+${phone}`;
  } else {
    // presume it's a brazillian cellphone number
    phone = _.replace(phone, /^55/, '');
    phone = `+55${phone}`;
  }

  return phone;
};
