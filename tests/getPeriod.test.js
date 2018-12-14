const getPeriod = require('../lib/getPeriod');

describe('getPeriod', () => {
  it('sould return howMany & unit to valid values', () => {
    const validValues = [
      '2hours',
      '20minutes',
      '15days',
      '1month',
      '1 month'
    ];
    const expectValues = [
      { howMany: 2, unit: 'hours' },
      { howMany: 20, unit: 'minutes' },
      { howMany: 15, unit: 'days' },
      { howMany: 1, unit: 'month' },
      { howMany: 1, unit: 'month' }
    ];
    validValues.forEach((value, i) => expect(getPeriod(value)).toEqual(expectValues[i]));
  });

  it('should return undefined passing invalid data type', () => {
    const invalidData = [
      ['sdaa'],
      { saf: 'dasf' },
      445646
    ];
    invalidData.forEach(data => expect(getPeriod(data)).toBe(undefined));
  });
});
