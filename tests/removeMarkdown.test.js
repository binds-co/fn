const { removeMarkdown } = require('../lib');

describe('removeMarkdown', () => {
  test('returns a cleaned string', () => {
    expect(removeMarkdown('i *am* a italic text')).toBe('i am a italic text');
    expect(removeMarkdown('i **am** a bold text')).toBe('i am a bold text');
    expect(removeMarkdown('i __am__ a underlined text')).toBe('i am a underlined text');
    expect(removeMarkdown('i ~~am~~ a text with strikeout')).toBe('i am a text with strikeout');
  });

  test('returns an interpoled string with default data', () => {
    expect(removeMarkdown('the label is: *|from.phone|*')).toBe('the label is: Telefone');
  });

  test('returns an interpoled string with custom data', () => {
    expect(removeMarkdown('my name is *|name|*', { name: 'Rick Sanchez' })).toBe('my name is Rick Sanchez');
    expect(removeMarkdown('my name is ***|name|***', { name: 'Rick Sanchez' })).toBe('my name is Rick Sanchez');
  });

  test('returns what received if the argument is not a string', () => {
    expect(removeMarkdown({})).toEqual({});
    expect(removeMarkdown(true)).toEqual(true);
    expect(removeMarkdown(984651)).toEqual(984651);
    expect(removeMarkdown(undefined)).toEqual(undefined);
    expect(removeMarkdown(null)).toEqual(null);
  });
});
