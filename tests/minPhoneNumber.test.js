const minPhoneNumber = require('../lib/minPhoneNumber');

describe('minPhoneNumber', () => {
  it('ensure phone number has at least 6 numbers', () => {
    const validNumbers = [
      '+55119454545454',
      '123456789',
      '11555445511',
      '5544557788',
      '1195558-7100',
      '(11)95558-7100',
      123456
    ];
    validNumbers.forEach(number => expect(minPhoneNumber(number)).toBe(true));
  });

  it('return false when phone has less than 6 numbers', () => {
    const validNumbers = [
      '+55119',
      'NDA',
      'não tenho',
      'x45x65x4'
    ];
    validNumbers.forEach(number => expect(minPhoneNumber(number)).toBe(false));
  });
});
