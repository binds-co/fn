describe('formatEmail', () => {
  const formatEmail = require('../lib/formatEmail');

  it('get valid email', () => {
    expect(formatEmail(' teste@binds.co ')).toBe('teste@binds.co');
  });

  it('invalid email', () => {
    expect(formatEmail(' teste@ ')).toBe('');
  });
});
