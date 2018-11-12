const { csat } = require('../lib');

describe('csat', () => {
  it('returns 300', () => {
    expect(csat(10, 30)).toBe(300);
  });

  it('returns 150', () => {
    expect(csat(10, 15)).toBe(150);
  });
});
