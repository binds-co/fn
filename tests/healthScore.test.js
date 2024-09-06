const { getHealthStatusLabel, getTranslatedHealthStatusLabel, getTranslatedChurnStatusLabel } = require('../lib/healthScore');
const { HEALTH, CHURN, SCORE } = require('../lib/constants');

describe('healthScore', () => {
  describe('getHealthStatusLabel', () => {
    it('should return superLow for score 0', () => {
      expect(getHealthStatusLabel(0)).toBe(HEALTH.LABELS.SUPER_LOW);
    });

    it('should return low for score 20', () => {
      expect(getHealthStatusLabel(20)).toBe(HEALTH.LABELS.LOW);
    });

    it('should return medium for score 40', () => {
      expect(getHealthStatusLabel(40)).toBe(HEALTH.LABELS.MEDIUM);
    });

    it('should return high for score 60', () => {
      expect(getHealthStatusLabel(60)).toBe(HEALTH.LABELS.HIGH);
    });

    it('should return superHigh for score 80', () => {
      expect(getHealthStatusLabel(80)).toBe(HEALTH.LABELS.SUPER_HIGH);
    });

    it('should return Invalid value for score -1', () => {
      expect(getHealthStatusLabel(-1)).toBe('Invalid value');
    });
  });

  describe('getTranslatedHealthStatusLabel', () => {
    it('should return Saúde Muito Baixa for score 0', () => {
      expect(getTranslatedHealthStatusLabel(0)).toBe(SCORE.LABELS.SUPER_LOW);
    });

    it('should return Saúde Baixa for score 20', () => {
      expect(getTranslatedHealthStatusLabel(20)).toBe(SCORE.LABELS.LOW);
    });

    it('should return Saúde Média for score 40', () => {
      expect(getTranslatedHealthStatusLabel(40)).toBe(SCORE.LABELS.MEDIUM);
    });

    it('should return Saúde Alta for score 60', () => {
      expect(getTranslatedHealthStatusLabel(60)).toBe(SCORE.LABELS.HIGH);
    });

    it('should return Saúde Muito Alta for score 80', () => {
      expect(getTranslatedHealthStatusLabel(80)).toBe(SCORE.LABELS.SUPER_HIGH);
    });

    it('should return Invalid value for score -1', () => {
      expect(getTranslatedHealthStatusLabel(-1)).toBe('Invalid value');
    });
  });

  describe('getTranslatedChurnStatusLabel', () => {
    it('should return Muito Baixa for churn 0', () => {
      expect(getTranslatedChurnStatusLabel(0)).toBe(CHURN.LABELS.SUPER_LOW);
    });

    it('should return Baixa for churn 20', () => {
      expect(getTranslatedChurnStatusLabel(20)).toBe(CHURN.LABELS.LOW);
    });

    it('should return Média for churn 40', () => {
      expect(getTranslatedChurnStatusLabel(40)).toBe(CHURN.LABELS.MEDIUM);
    });

    it('should return Alta for churn 60', () => {
      expect(getTranslatedChurnStatusLabel(60)).toBe(CHURN.LABELS.HIGH);
    });

    it('should return Muito Alta for churn 80', () => {
      expect(getTranslatedChurnStatusLabel(80)).toBe(CHURN.LABELS.SUPER_HIGH);
    });

    it('should return Invalid value for churn -1', () => {
      expect(getTranslatedChurnStatusLabel(-1)).toBe('Invalid value');
    });
  });
});
