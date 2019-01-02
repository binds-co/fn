const regex = /([0-9]{5,})\w+/;

module.exports = phone => regex.test(phone);
