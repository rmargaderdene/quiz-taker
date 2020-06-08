/** Question */

export interface Choice {
  Id: string;
  Value: string;
  Name: string;
}

export interface Question {
  Id: string;
  Type:
    | 'multipleChoice'
    | 'multipleAnswer'
    | 'shortAnswer'
    | 'trueFalse'
    | 'withImage';
  ImageUrl?: string;
  Name: string;
  Choices: Choice[];
  CorrectAnswers: string[];
  Answers: string[];
  Status: '' | 'Answered' | 'Correct' | 'InCorrect';
}

export interface Questions {
  Questions: Question[];
}

//**  Quiz */

export interface Quiz {
  StartedOn: string;
  CompletedOn: string;
  State: '' | 'Started' | 'Finished';
  timeTaken: string;
  Grade: number;
}
