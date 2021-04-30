const _ = require('lodash');

module.exports = phone => {
  if (_.isEmpty(phone)) {
    return phone;
  }

  const startsWithPlus = _.startsWith(phone, '+');
  phone = _.replace(_.replace(phone, /[^\d]/g, ''), /^0+/, '');

  if (startsWithPlus) {
    phone = `+${phone}`;
  } else {
    // presume it's a brazillian cellphone number
    if (phone.length < 12 && _.startsWith(phone, '55')) {
      phone = `+55${phone}`;
    } else {
      phone = _.replace(phone, /^55/, '');
      phone = `+55${phone}`;
    }
  }

  return phone;
};
