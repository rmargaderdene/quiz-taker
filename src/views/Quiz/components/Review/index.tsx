import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reducer';

import { Theme, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  QMultipleAnswer,
  QShortAnswer,
  QTrueFalse,
  QMultipleChoice,
  QWithImage
} from 'common/components';
import { Question } from 'types';
import { submitQuestions } from 'slices/question/action';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    marginBottom: 30
  },
  questionContainer: {
    padding: 20,
    marginTop: 50,
    background: '#FFFFFF',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 8px rgba(0, 0, 0, 0.12)'
  },
  submitButton: {
    background: '#AE466A',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: '#692B40'
    },
    marginLeft: 30
  },
  backButton: {
    background: '#692B40',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: '#AE466A'
    }
  },
  submitText: {
    margin: '12px 0',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#FFFFFF'
  },
  buttonContainer: {
    textAlign: 'right',
    marginTop: 20
  }
}));

type Props = {
  back: () => void;
  returnToQuestion: (index: number) => void;
  submit: () => void;
};

export const Review: React.FC<Props> = ({ back, returnToQuestion, submit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const questions: Question[] = useSelector(
    (state: RootState) => state.question.Questions
  );

  const submitHandler = () => {
    submit();
    dispatch(submitQuestions());
  };

  return (
    <div className={classes.root}>
      <div>
        {questions.map((question, index) => {
          return (
            <div className={classes.questionContainer} key={question.Id}>
              {question.Type === 'multipleAnswer' && (
                <QMultipleAnswer
                  question={question}
                  currentIndex={index + 1}
                  click={index => returnToQuestion(index)}
                  review
                  disabled
                />
              )}
              {question.Type === 'multipleChoice' && (
                <QMultipleChoice
                  question={question}
                  currentIndex={index + 1}
                  click={index => returnToQuestion(index)}
                  review
                  disabled
                />
              )}
              {question.Type === 'shortAnswer' && (
                <QShortAnswer
                  question={question}
                  currentIndex={index + 1}
                  click={index => returnToQuestion(index)}
                  review
                  disabled
                />
              )}
              {question.Type === 'trueFalse' && (
                <QTrueFalse
                  question={question}
                  currentIndex={index + 1}
                  click={index => returnToQuestion(index)}
                  review
                  disabled
                />
              )}
              {question.Type === 'withImage' && (
                <QWithImage
                  question={question}
                  currentIndex={index + 1}
                  click={index => returnToQuestion(index)}
                  review
                  disabled
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.backButton} onClick={back}>
          <span className={classes.submitText}>Back</span>
        </Button>
        <Button className={classes.submitButton} onClick={submitHandler}>
          <span className={classes.submitText}>Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default Review;
