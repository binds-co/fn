describe('formatPhone', () => {
  const format = require('../lib/formatPhone');

  it('non br number w/o letter', () => {
    expect(format('+5411959595959x')).toBe('+5411959595959');
  });

  it('presume br number', () => {
    expect(format('5511959595959x')).toBe('+5511959595959');
  });

  it('empty string return empty string', () => {
    expect(format('')).toBe('');
  });
});
