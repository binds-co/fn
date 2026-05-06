const { replaceStringVars } = require('../lib');

describe('replaceStringVars', () => {
  test('returns an interpoled string with default data', () => {
    expect(replaceStringVars('the label is: *|from.phone|*')).toBe('the label is: ');
  });

  test('returns an interpoled string with custom data', () => {
    expect(replaceStringVars('my name is *|name|*', { name: 'Rick Sanchez' })).toBe('my name is Rick Sanchez');
    expect(replaceStringVars('my name is ***|name|***', { name: 'Rick Sanchez' })).toBe('my name is **Rick Sanchez**');
  });

  test('returns what received if the argument is not a string', () => {
    expect(replaceStringVars({})).toEqual({});
    expect(replaceStringVars(true)).toEqual(true);
    expect(replaceStringVars(984651)).toEqual(984651);
    expect(replaceStringVars(undefined)).toEqual(undefined);
    expect(replaceStringVars(null)).toEqual(null);
  });

  test('returns empty string when field does not exist', () => {
    expect(replaceStringVars('hello *|unknown|*', { name: 'Morty' })).toBe('hello ');
    expect(replaceStringVars('*|from.phone|*', {})).toBe('');
  });

  test('returns empty string when field value is null or undefined', () => {
    expect(replaceStringVars('age: *|age|*', { age: undefined })).toBe('age: ');
    expect(replaceStringVars('age: *|age|*', { age: null })).toBe('age: ');
  });

  test('keeps replacing multiple vars in the same string', () => {
    expect(
      replaceStringVars('name: *|name|* / city: *|address.city|*', {
        name: 'Summer',
        address: { city: 'Seattle' },
      })
    ).toBe('name: Summer / city: Seattle');
  });

  test('returns empty string for falsy values because of fallback', () => {
    expect(replaceStringVars('count: *|count|*', { count: 0 })).toBe('count: ');
    expect(replaceStringVars('active: *|active|*', { active: false })).toBe('active: ');
  });
});
