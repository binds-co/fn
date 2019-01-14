describe('getEventData', () => {
  const { getEventData } = require('../lib');

  it('returns undefined for data prop not found', () => {
    expect(getEventData()).toBeFalsy();
  });

  it('get data without parsing json', () => {
    const result = getEventData({ data: 'abc' });
    expect(result).toBe('abc');
  });

  it('get data from JSON', () => {
    const result = getEventData({ data: JSON.stringify({ a: 1 }) });
    expect(result).toEqual({ a: 1 });
  });

  it('get data from buffered JSON', () => {
    const data = Buffer.from(JSON.stringify({ a: 1 }));
    const result = getEventData({ data: { data } });
    expect(result).toEqual({ a: 1 });
  });
});
