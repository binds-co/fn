const { HEALTH, CHURN } = require('./constants');

/**
 * Gets the health label based on the score.
 * @param {number} score - Health score
 * @returns {string} - Corresponding health label
 */
function getHealthLabelFromScore(score) {
  if (score >= 0 && score <= 19) return HEALTH.LABELS.SUPER_LOW;
  if (score >= 20 && score <= 39) return HEALTH.LABELS.LOW;
  if (score >= 40 && score <= 59) return HEALTH.LABELS.MEDIUM;
  if (score >= 60 && score <= 79) return HEALTH.LABELS.HIGH;
  if (score >= 80) return HEALTH.LABELS.SUPER_HIGH;
  return 'Invalid score';
}

/**
 * Gets the churn label based on the churn value.
 * @param {number} churn - Churn value
 * @returns {string} - Corresponding churn label
 */
function getChurnLabelFromValue(churn) {
  if (churn >= 0 && churn <= 19) return CHURN.LABELS.SUPER_LOW;
  if (churn >= 20 && churn <= 39) return CHURN.LABELS.LOW;
  if (churn >= 40 && churn <= 59) return CHURN.LABELS.MEDIUM;
  if (churn >= 60 && churn <= 79) return CHURN.LABELS.HIGH;
  if (churn >= 80) return CHURN.LABELS.SUPER_HIGH;
  return 'Invalid churn';
}

module.exports = {
  getHealthLabelFromScore,
  getChurnLabelFromValue
};