const { getMarkdownVars } = require('../lib');

describe('getMarkdownVars', () => {
  test('returns empty array for non-detected variables', () => {
    expect(getMarkdownVars('*aaa* _i dont have any var')).toEqual([]);
  });

  test('returns three variables', () => {
    expect(getMarkdownVars('*|returns|* *|three|* *|variables|*')).toEqual(['returns', 'three', 'variables']);
  });
})
