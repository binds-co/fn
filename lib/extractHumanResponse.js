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
  }
};

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
  }

  return null;
};
