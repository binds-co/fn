const _ = require('lodash');
const kpiLabels = {
  '5emo': {
    '100': 'Excelente',
    '75': 'Muito Bom',
    '50': 'Satisfatório',
    '25': 'Ruim',
    '0': 'Muito Ruim'
  },
  'yn': {
    '100': 'Sim',
    '0': 'Não'
  },
  'ynd': {
    '100': 'Sim',
    '50': 'Não Sei',
    '0': 'Não'
  }
};
const npsLabels = {
  '10num': {
    '100': '10',
    '90': '9',
    '80': '8',
    '70': '7',
    '60': '6',
    '50': '5',
    '40': '4',
    '30': '3',
    '20': '2',
    '10': '1',
    '0': '0'
  },
  'ynm': {
    '95': 'Sim',
    '75': 'Talvez',
    '5': 'Não'
  }
};

const nesLabels = {
  '10num': {
    '0': '1',
    '25': '2',
    '50': '3',
    '75': '4',
    '100': '5'
  },
  '1to7': {
    '0': '1',
    '15': '2',
    '30': '3',
    '50': '4',
    '65': '5',
    '80': '6',
    '100': '7'
  }
};

const cesLabels = {
  '1to7': {
    '0': '1',
    '15': '2',
    '30': '3',
    '50': '4',
    '65': '5',
    '80': '6',
    '100': '7'
  },
  '1to7button': {
    '0': 'Discordo Totalmente',
    '15': 'Discordo',
    '30': 'Discordo Parcialmente',
    '50': 'Neutro',
    '65': 'Concordo Parcialmente',
    '80': 'Concordo',
    '100': 'Concordo Totalmente'
  }
};

const matrixLabels = {
  '10num': {
    100: '10',
    90: '9',
    80: '8',
    70: '7',
    60: '6',
    50: '5',
    40: '4',
    30: '3',
    20: '2',
    10: '1',
    0: '0'
  },
  'matrix1to5': {
    100: '5',
    75: '4',
    50: '3',
    25: '2',
    0: '1'
  }
}

module.exports = function extractHumanResponse(doc) {
  doc = doc || this;
  const ui = doc.question.ui;

  switch (doc.question.type) {
    case 'text':
      return doc.text;
    case 'enum':
      return _.isArray(doc.value) ? doc.value.join('\n') : doc.value;
    case 'nps':
      return _.get(npsLabels, [ui, '' + doc.rating]);
    case 'csat':
      return _.get(doc, 'value');
    case 'kpi':
      return _.get(kpiLabels, [ui, '' + doc.rating]) || (doc.rating + '%');
    case 'nes':
      return _.get(nesLabels, [ui, '' + doc.rating]);
    case 'matrix':
      return _.map(doc.value, v => _.get(matrixLabels, [ui, _.get(v, 'rating')])).join('\n');
    case 'nvs':
      return _.get(doc, 'value');
    case 'ces':
      return _.get(cesLabels, [ui, '' + doc.rating]);
  }

  return null;
};
