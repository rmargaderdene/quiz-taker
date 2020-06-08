import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quiz } from 'types';

const initialState: Quiz = {
  StartedOn: '',
  CompletedOn: '',
  State: '',
  timeTaken: '',
  Grade: 0
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    start(state, action: PayloadAction<{ startedOn: string }>) {
      const { startedOn } = action.payload;
      state.StartedOn = startedOn;
      state.State = 'Started';
    },
    finish(
      state,
      action: PayloadAction<{
        completedOn: string;
        grade: number;
        timeTaken: string;
      }>
    ) {
      const { completedOn, grade, timeTaken } = action.payload;
      state.CompletedOn = completedOn;
      state.State = 'Finished';
      state.Grade = grade;
      state.timeTaken = timeTaken;
    }
  }
});

export const { start, finish } = quizSlice.actions;
export default quizSlice.reducer;
