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
});
