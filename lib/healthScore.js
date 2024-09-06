const { HEALTH, CHURN, SCORE } = require('./constants');

/**
 * Gets the corresponding label based on the value and label type.
 * @param {number} value - The value (score or churn)
 * @param {object} labels - The set of labels (HEALTH.LABELS, CHURN.LABELS, SCORE.LABELS)
 * @param {object} [options] - Optional configurations for the label
 * @param {string} [options.removeWord] - A word to remove from the label
 * @returns {string} - Corresponding label
 */
function getLabelFromValue(value, labels, options = {}) {
  let label;
  
  if (value >= 0 && value <= 19) label = labels.SUPER_LOW;
  else if (value >= 20 && value <= 39) label = labels.LOW;
  else if (value >= 40 && value <= 59) label = labels.MEDIUM;
  else if (value >= 60 && value <= 79) label = labels.HIGH;
  else if (value >= 80) label = labels.SUPER_HIGH;
  else return 'Invalid value';

  // Handle optional label transformation (e.g., removing a word like "Churn")
  if (options.removeWord) {
    label = label.replace(options.removeWord, '').trim();
  }

  return label;
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
 * @param {boolean} [removeChurnWord] - Whether to remove "Churn" from the label
 * @returns {string} - Translated churn status label
 */
function getTranslatedChurnStatusLabel(churn, removeChurnWord = true) {
  const options = removeChurnWord ? { removeWord: 'Churn' } : {};
  return getLabelFromValue(churn, CHURN.LABELS, options);
}

module.exports = {
  getHealthStatusLabel,
  getTranslatedHealthStatusLabel,
  getTranslatedChurnStatusLabel
};
