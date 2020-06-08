import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'reducer';

export const selectQuestionByIndex = createSelector(
  (state: RootState) => state.question.Questions,
  (_: any, currentIndex: number) => currentIndex,
  (questions, currentIndex) =>
    questions.length > 0 ? questions[currentIndex] : null
);

export const selectQuestionsSize = createSelector(
  (state: RootState) => state.question.Questions,
  questions => questions.length
);

export const selectNumberOfCorrectQuestion = createSelector(
  (state: RootState) => state.question.Questions,
  questions =>
    questions.filter(question => question.Status === 'Correct').length
);
