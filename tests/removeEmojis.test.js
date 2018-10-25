const { removeEmojis } = require('../lib');

describe('removeEmojis', () => {
  test('returns a string without emojis', () => {
    expect(removeEmojis('i🐱 d🐭o not🐮 🙊🙉🙊have a🕷ny🕷 emoji🌎🌍🌏🌕🌖🌗🌘🌑🌒🌓🌔')).toBe('i do not have any emoji')
  })

  test('returns what received in case of the argument not being a string', () => {
    expect(removeEmojis({})).toEqual({})
    expect(removeEmojis([])).toEqual([])
    expect(removeEmojis(1832946)).toEqual(1832946)
    expect(removeEmojis(null)).toEqual(null)
    expect(removeEmojis(undefined)).toEqual(undefined)
  })
})
