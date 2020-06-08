import { combineReducers } from '@reduxjs/toolkit';

import quizReducer from 'slices/quiz/quizSlice';
import questionReducer from 'slices/question/questionSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
  question: questionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
