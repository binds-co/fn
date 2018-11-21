const round = require('./round');
const nesValues = {
  '0': '1',
  '25': '2',
  '50': '3',
  '75': '4',
  '100': '5'
};

module.exports = {
  nesValues,
  /**
   * @param {number} littleEffortResponses
   * @param {number} muchEffortResponses
   * @param {number} totalResponses
 */
  nes: (littleEffortResponses, muchEffortResponses, totalResponses) => {
    const muchEffortPercentage = round((muchEffortResponses / totalResponses * 100), 2);
    const littleEffortPercentage = round((littleEffortResponses / totalResponses * 100), 2);
    return littleEffortPercentage - muchEffortPercentage;
  },

  /**
 * @param {number} rating
 */
  ratingToSurveyValue: (rating) => {
    return nesValues[rating];
  }
};
