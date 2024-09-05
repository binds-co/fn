const { getHealthLabelFromScore, getChurnLabelFromValue } = require('../lib/healthScore');
const { HEALTH, CHURN } = require('../lib/constants');

describe('healthScore', () => {
  describe('getHealthLabelFromScore', () => {
    it('should return superLow for score 0', () => {
      expect(getHealthLabelFromScore(0)).toBe(HEALTH.LABELS.SUPER_LOW);
    });

    it('should return low for score 20', () => {
      expect(getHealthLabelFromScore(20)).toBe(HEALTH.LABELS.LOW);
    });

    it('should return medium for score 40', () => {
      expect(getHealthLabelFromScore(40)).toBe(HEALTH.LABELS.MEDIUM);
    });

    it('should return high for score 60', () => {
      expect(getHealthLabelFromScore(60)).toBe(HEALTH.LABELS.HIGH);
    });

    it('should return superHigh for score 80', () => {
      expect(getHealthLabelFromScore(80)).toBe(HEALTH.LABELS.SUPER_HIGH);
    });

    it('should return Invalid score for score -1', () => {
      expect(getHealthLabelFromScore(-1)).toBe('Invalid score');
    });
  });

  describe('getChurnLabelFromValue', () => {
    it('should return Muito Baixa for churn 0', () => {
      expect(getChurnLabelFromValue(0)).toBe(CHURN.LABELS.SUPER_LOW);
    });

    it('should return Baixa for churn 20', () => {
      expect(getChurnLabelFromValue(20)).toBe(CHURN.LABELS.LOW);
    });

    it('should return Média for churn 40', () => {
      expect(getChurnLabelFromValue(40)).toBe(CHURN.LABELS.MEDIUM);
    });

    it('should return Alta for churn 60', () => {
      expect(getChurnLabelFromValue(60)).toBe(CHURN.LABELS.HIGH);
    });

    it('should return Muito Alta for churn 80', () => {
      expect(getChurnLabelFromValue(80)).toBe(CHURN.LABELS.SUPER_HIGH);
    });

    it('should return Invalid churn for churn -1', () => {
      expect(getChurnLabelFromValue(-1)).toBe('Invalid churn');
    });
  });
});