const { HEALTH, CHURN, SCORE } = require('./constants');

/**
 * Gets the corresponding label based on the value and label type.
 * @param {number} value - The value (score or churn)
 * @param {object} labels - The set of labels (HEALTH.LABELS, CHURN.LABELS, SCORE.LABELS)
 * @returns {string} - Corresponding label
 */
function getLabelFromValue(value, labels) {
  if (value >= 0 && value <= 19) return labels.SUPER_LOW;
  if (value >= 20 && value <= 39) return labels.LOW;
  if (value >= 40 && value <= 59) return labels.MEDIUM;
  if (value >= 60 && value <= 79) return labels.HIGH;
  if (value >= 80) return labels.SUPER_HIGH;
  return 'Invalid value';
}

/**
 * Gets the health status label based on the score.
 * @param {number} score - Health score
 * @returns {string} - Health status label
 */
function getHealthStatusLabel(score) {
  return getLabelFromValue(score, HEALTH.LABELS);
}

/**
 * Gets the translated health status label based on the score.
 * @param {number} score - Health score
 * @returns {string} - Translated health status label
 */
function getTranslatedHealthStatusLabel(score) {
  return getLabelFromValue(score, SCORE.LABELS);
}

/**
 * Gets the translated churn status label based on the churn value.
 * @param {number} churn - Churn value
 * @returns {string} - Churn status label
 */
function getTranslatedChurnStatusLabel(churn) {
  return getLabelFromValue(churn, CHURN.LABELS);
}

module.exports = {
  getHealthStatusLabel,
  getTranslatedHealthStatusLabel,
  getTranslatedChurnStatusLabel
};
