import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, Questions } from 'types';

const initialState: Questions = {
  Questions: []
};

const questionSlice = createSlice({
  name: 'question',
  initialState: initialState,
  reducers: {
    fetch(state, action: PayloadAction<{ questions: Question[] }>) {
      const { questions } = action.payload;
      state.Questions = questions;
    },
    update(state, action: PayloadAction<{ question: Question }>) {
      const { question } = action.payload;
      const updatedQuestions = state.Questions.map(item => {
        return item.Id === question.Id ? question : item;
      });
      state.Questions = updatedQuestions;
    }
  }
});

export const { fetch, update } = questionSlice.actions;
export default questionSlice.reducer;
