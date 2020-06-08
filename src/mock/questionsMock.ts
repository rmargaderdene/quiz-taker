import uuid from 'uuid/v1';
import mock from 'common/utils/mock';

mock.onGet('/api/questions').reply(200, [
  {
    Id: uuid(),
    Type: 'multipleChoice',
    Name: 'What is the data type supported by JavaScript?',
    Choices: [
      { Id: 1, Value: 'Integer', Name: 'Integer' },
      { Id: 2, Value: 'Const', Name: 'Const' },
      { Id: 3, Value: 'Let', Name: 'Let' },
      { Id: 4, Value: 'Number', Name: 'Number' }
    ],
    CorrectAnswers: ['Number'],
    Answers: [''],
    Status: ''
  },
  {
    Id: uuid(),
    Type: 'multipleAnswer',
    Name: 'What are the undefined values in JavaScript?',
    Choices: [
      {
        Id: 1,
        Value: 'novariable',
        Name: `Variable used in the code doesn't exist`
      },
      {
        Id: 2,
        Value: 'notassigned',
        Name: 'Variable is not assigned to any value'
      },
      { Id: 3, Value: 'noobject', Name: 'It implies no object' },
      { Id: 4, Value: 'noproperty', Name: `Property doesn't exist` }
    ],
    CorrectAnswers: ['novariable', 'notassigned', 'noproperty'],
    Answers: [''],
    Status: ''
  },
  {
    Id: uuid(),
    Type: 'shortAnswer',
    Name: 'What is the use of isNaN function?',
    Choices: [],
    CorrectAnswers: [
      'isNan function returns true if the argument is not a number otherwise it is false.'
    ],
    Answers: [''],
    Status: ''
  },
  {
    Id: uuid(),
    Type: 'trueFalse',
    Name: 'Is JavaScript a case-sensitive language?',
    Choices: [
      { Id: 1, Value: 'Yes', Name: 'Yes' },
      { Id: 2, Value: 'No', Name: 'No' }
    ],
    CorrectAnswers: ['Yes'],
    Answers: [''],
    Status: ''
  },
  {
    Id: uuid(),
    Type: 'withImage',
    Name: 'Which one is the correct answer? ',
    ImageUrl: '/images/question5.png',
    Choices: [
      {
        Id: 1,
        Value: '1',
        Name: '[" john ", " joseph "," Jane ", " charlie "]'
      },
      {
        Id: 2,
        Value: '2',
        Name: '[" joseph "," Jane ", " charlie ", " john "]'
      },
      {
        Id: 3,
        Value: '3',
        Name: '[" Jane ", " charlie ", " joseph ", " john "]'
      }
    ],
    CorrectAnswers: ['2'],
    Answers: [''],
    Status: ''
  }
]);
