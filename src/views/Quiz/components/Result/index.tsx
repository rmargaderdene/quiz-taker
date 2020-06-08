import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducer';

import { Theme, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  QMultipleAnswer,
  QShortAnswer,
  QTrueFalse,
  QMultipleChoice,
  QWithImage
} from 'common/components';
import { Question, Quiz } from 'types';
import { selectNumberOfCorrectQuestion } from 'selectors/quiz';

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
    borderRadius: '10%',
    '&:hover': {
      background: '#692B40'
    },
    marginLeft: 30
  },
  backButton: {
    background: '#692B40',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10%',
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
  },
  correctAnswerContainer: {
    padding: 20,
    marginTop: 10,
    background: '#FFEAEA',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 8px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center'
  },
  answerLabel: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#692B40',
    marginRight: 10
  },
  answerName: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#37474F'
  },
  summaryContainer: {
    marginTop: 20,
    background: '#FFFFFF',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 8px rgba(0, 0, 0, 0.12)'
  },
  row: {
    height: 30,
    display: 'flex',
    borderBottom: '1px solid #C57D7D',
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '14px',
    color: '#37474F'
  },
  label: {
    width: 120,
    background: '#FFEAEA',
    textAlign: 'right',
    padding: '6px 5px 6px 0',
    marginRight: 15
  },
  value: {
    padding: '6px  0',
    marginRight: 10
  },
  reviewValue: {
    padding: '6px  0',
    marginRight: 10,
    color: '#AE466A',
    cursor: 'pointer'
  },
  title: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '27px',
    color: '#37474F',
    marginBottom: 10
  },
  divider: {
    border: '1px solid #C57D7D'
  }
}));

type Props = {};

export const Result: React.FC<Props> = () => {
  const classes = useStyles();

  const [review, setReview] = useState(false);

  const questions: Question[] = useSelector(
    (state: RootState) => state.question.Questions
  );

  const numberOfCorrectQ: number = useSelector((state: RootState) =>
    selectNumberOfCorrectQuestion(state)
  );

  const quiz: Quiz = useSelector((state: RootState) => state.quiz);

  return (
    <div className={classes.root}>
      <div className={classes.title}>Your Result</div>
      <Divider className={classes.divider} />
      <div>
        <div className={classes.summaryContainer}>
          <div className={classes.row}>
            <div className={classes.label}>Started on</div>
            <div className={classes.value}>{quiz.StartedOn}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>State</div>
            <div className={classes.value}>{quiz.State}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>Completed on</div>
            <div className={classes.value}>{quiz.CompletedOn}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>Time taken</div>
            <div className={classes.value}>{quiz.timeTaken}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>Grade</div>
            <div className={classes.value}>
              <b>{numberOfCorrectQ}.00</b> out of {questions.length}.00{' '}
              <b> ({quiz.Grade}%)</b>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.label} />
            <div
              className={classes.reviewValue}
              onClick={() => setReview(value => !value)}>
              Review
            </div>
          </div>
        </div>
        {review &&
          questions.map((question, index) => {
            return (
              <div key={question.Id}>
                <div className={classes.questionContainer}>
                  {question.Type === 'multipleAnswer' && (
                    <QMultipleAnswer
                      question={question}
                      currentIndex={index + 1}
                      disabled
                      result
                    />
                  )}
                  {question.Type === 'multipleChoice' && (
                    <QMultipleChoice
                      question={question}
                      currentIndex={index + 1}
                      disabled
                      result
                    />
                  )}
                  {question.Type === 'shortAnswer' && (
                    <QShortAnswer
                      question={question}
                      currentIndex={index + 1}
                      disabled
                      result
                    />
                  )}
                  {question.Type === 'trueFalse' && (
                    <QTrueFalse
                      question={question}
                      currentIndex={index + 1}
                      disabled
                      result
                    />
                  )}
                  {question.Type === 'withImage' && (
                    <QWithImage
                      question={question}
                      currentIndex={index + 1}
                      disabled
                      result
                    />
                  )}
                </div>
                {question.Status === 'InCorrect' && (
                  <div className={classes.correctAnswerContainer}>
                    <div className={classes.answerLabel}>
                      The correct answer is:
                    </div>
                    <div className={classes.answerName}>
                      {question.Type !== 'shortAnswer'
                        ? question.CorrectAnswers.map(answer => {
                            return (
                              question.Choices.find(
                                item => item.Value === answer
                              )?.Name + ', '
                            );
                          })
                        : question.CorrectAnswers[0]}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Result;
