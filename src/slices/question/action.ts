import { AppThunk } from 'store';
import axios from 'common/utils/axios';
import moment from 'moment';

import { Question } from 'types';
import { fetch, update } from './questionSlice';
import { finishQuiz } from 'slices/quiz/action';

//** ASYNC FUNCS */

export const fetchQuestions = (): AppThunk => async dispatch => {
  try {
    const questions = await callApiQuestions();
    dispatch(fetch({ questions }));
  } catch (err) {
    // dispatch(failed(err.toString()));
  }
};

export const saveAnswers = (
  question: Question,
  answers: string[]
): AppThunk => async dispatch => {
  try {
    const updatedQuestion: Question = {
      ...question,
      Answers: answers,
      Status: answers.length === 1 && answers[0] === '' ? '' : 'Answered'
    };

    dispatch(update({ question: updatedQuestion }));
  } catch (err) {
    // dispatch(failed(err.toString()));
  }
};

export const submitQuestions = (): AppThunk => async (dispatch, getState) => {
  try {
    const questions = getState().question.Questions;
    for (const question of questions) {
      let status: 'Correct' | 'InCorrect' = 'Correct';
      question.CorrectAnswers.forEach(item => {
        if (question.Type === 'shortAnswer') {
          if (question.Answers.length === 1 && question.Answers[0] === '') {
            status = 'InCorrect';
          }
        } else if (question.Type === 'multipleAnswer') {
          question.Answers.forEach(answer => {
            if (!question.CorrectAnswers.includes(answer) && answer !== '') {
              status = 'InCorrect';
            }
          });
        } else if (!question.Answers.includes(item)) {
          status = 'InCorrect';
        }
      });

      const updatedQuestion: Question = {
        ...question,
        Status: status
      };

      await dispatch(update({ question: updatedQuestion }));
    }

    const updatedQuestions = getState().question.Questions;
    const grade =
      updatedQuestions.filter(item => item.Status === 'Correct').length /
      updatedQuestions.length;

    dispatch(finishQuiz(moment().format('DD/MM/YYYY HH:mm:ss'), grade * 100));
  } catch (err) {
    // dispatch(failed(err.toString()));
  }
};

//** API FUNCS */

const callApiQuestions = () => {
  return axios.get('/api/questions').then(response => {
    const questions: Question[] = response.data;
    return questions;
  });
};
