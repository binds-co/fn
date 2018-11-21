const { nps } = require('../lib');

describe('nps', () => {
  it('returns 0', () => {
    expect(nps(100, 250, 250)).toBe(0);
  });

  it('returns 250', () => {
    expect(nps(100, 500, 250)).toBe(250);
  });
});
