const extractHumanResponse = require('../lib/extractHumanResponse');

describe('extractHumanResponse', () => {
  it('Should extract human response from text question', () => {
    let response = {
      question: {
        ui: 'text',
        type: 'text'
      },
      text: 'let my people go',
      rating: 50
    };
    const result = extractHumanResponse(response);
    expect(result).toBe(response.text);
  });

  it('Should extract human response from enum question single value', () => {
    let response = {
      question: {
        ui: 'multiple',
        type: 'enum'
      },
      value: 'Buffalo Soldier',
      rating: 50
    };
    const result = extractHumanResponse(response);
    expect(result).toBe(response.value);
  });

  it('Should extract human response from enum question multiple value', () => {
    let response = {
      question: {
        ui: 'multiple',
        type: 'enum'
      },
      value: ['Buffalo Soldier', 'I shot the sheriff'],
      rating: 100
    };
    expect(extractHumanResponse(response)).toBe(response.value.join('\n'));
  });

  it('Should extract human response from nps question ynm label', () => {
    let response = {
      question: {
        ui: 'ynm',
        type: 'nps'
      }
    };
    let possibleResponses = [
      {
        ...response,
        rating: 5
      },
      {
        ...response,
        rating: 75
      },
      {
        ...response,
        rating: 95
      }
    ];
    const [result1, result2, result3] =
      possibleResponses.map(response => extractHumanResponse(response));
    expect(result1).toBe('Não');
    expect(result2).toBe('Talvez');
    expect(result3).toBe('Sim');
  });

  it('Should extract human response from nps question 10num label', () => {
    let response = {
      question: {
        ui: '10num',
        type: 'nps'
      }
    };
    for (let i = 0; i < 11; i++) {
      expect(extractHumanResponse({ ...response, rating: i * 10 })).toBe(String(i));
    }
  });

  it('Should extract human response from csat question', () => {
    let response = {
      question: {
        ui: '5emo',
        type: 'csat'
      },
      value: 'Satisfatório'
    };
    expect(extractHumanResponse(response)).toBe(response.value);
  });

  it('Should extract human response from kpi question 5emo label', () => {
    let expectValues = [
      'Muito Ruim',
      'Ruim',
      'Satisfatório',
      'Muito Bom',
      'Excelente'
    ];
    let response = {
      question: {
        ui: '5emo',
        type: 'kpi'
      }
    };
    for (let i = 0; i < expectValues.length; i++) {
      expect(extractHumanResponse({ ...response, rating: i * 25 })).toBe(expectValues[i]);
    }
  });

  it('Should extract human response from kpi question yn label', () => {
    let response = {
      question: {
        ui: 'yn',
        type: 'kpi'
      }
    };
    expect(extractHumanResponse({ ...response, rating: 100 })).toBe('Sim');
    expect(extractHumanResponse({ ...response, rating: 0 })).toBe('Não');
  });

  it('Should extract human response from kpi question ynd label', () => {
    let response = {
      question: {
        ui: 'ynd',
        type: 'kpi'
      }
    };
    expect(extractHumanResponse({ ...response, rating: 100 })).toBe('Sim');
    expect(extractHumanResponse({ ...response, rating: 50 })).toBe('Não Sei');
    expect(extractHumanResponse({ ...response, rating: 0 })).toBe('Não');
  });

  it('Should extract human response from nes question', () => {
    let response = {
      question: {
        ui: '10num',
        type: 'nes'
      }
    };
    expect(extractHumanResponse({ ...response, rating: 100 })).toBe('5');
    expect(extractHumanResponse({ ...response, rating: 75 })).toBe('4');
    expect(extractHumanResponse({ ...response, rating: 50 })).toBe('3');
    expect(extractHumanResponse({ ...response, rating: 25 })).toBe('2');
    expect(extractHumanResponse({ ...response, rating: 0 })).toBe('1');
  });
});
