const validatePhone = require('../lib/validatePhone');

test('should return true for valid phone numbers', () => {
    expect(validatePhone('1234567890')).toBe(true);
    expect(validatePhone('(123) 456-7890')).toBe(true);
    expect(validatePhone('(55) 11456-7855')).toBe(true);
    expect(validatePhone('1111123456')).toBe(true);
    expect(validatePhone('(123) 444-44890')).toBe(true);
});

test('should return false for invalid phone numbers', () => {
    expect(validatePhone('22222')).toBe(false);
    expect(validatePhone('abc12345')).toBe(false);
    expect(validatePhone('+559999999999')).toBe(false);
    expect(validatePhone('(99)999999999')).toBe(false);
    expect(validatePhone('+5599999999999')).toBe(false);
    expect(validatePhone('+5583999999999')).toBe(false);
    expect(validatePhone('5521999999999')).toBe(false);
    expect(validatePhone('5511000000000')).toBe(false);
    expect(validatePhone('11 988888888')).toBe(false);
    expect(validatePhone('00000000000')).toBe(false);
    expect(validatePhone('+559999999999')).toBe(false);
    expect(validatePhone('+5511900000000')).toBe(false);
    expect(validatePhone('none')).toBe(false);
    expect(validatePhone('11111111111')).toBe(false);
});
