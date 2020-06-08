import { AppThunk } from 'store';
import { start, finish } from './quizSlice';
import moment from 'moment';

//** ASYNC FUNCS */

export const startQuiz = (startedOn: string): AppThunk => async dispatch => {
  try {
    dispatch(start({ startedOn }));
  } catch (err) {
    // dispatch(failed(err.toString()));
  }
};

export const finishQuiz = (
  completedOn: string,
  grade: number
): AppThunk => async (dispatch, getState) => {
  try {
    const quiz = getState().quiz;

    const startedDate = moment(quiz.StartedOn);
    const completedDate = moment(completedOn);
    const duration = moment.duration(completedDate.diff(startedDate));

    let timeTaken = '';
    if (duration.hours() > 0) {
      timeTaken = timeTaken + duration.hours() + ' hours';
    }
    if (duration.minutes() > 0) {
      timeTaken = timeTaken + duration.minutes() + ' mins';
    }
    if (duration.seconds() > 0) {
      timeTaken = timeTaken + duration.seconds() + ' secs';
    }

    dispatch(finish({ completedOn, grade, timeTaken }));
  } catch (err) {
    // dispatch(failed(err.toString()));
  }
};
