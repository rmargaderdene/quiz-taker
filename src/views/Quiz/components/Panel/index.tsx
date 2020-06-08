import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducer';
import { isEqual } from 'lodash';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  QMultipleAnswer,
  QShortAnswer,
  QTrueFalse,
  QMultipleChoice,
  QWithImage
} from 'common/components';
import { Question } from 'types';
import { selectQuestionByIndex } from 'selectors/quiz';

const useStyles = makeStyles((theme: Theme) => ({
  questionContainer: {
    padding: 20,
    marginTop: 10,
    background: '#FFFFFF',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 8px rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      marginTop: 50
    }
  }
}));

type Props = {
  currentIndex: number;
};

export const Panel: React.FC<Props> = ({ currentIndex }) => {
  const classes = useStyles();

  const question: Question | null = useSelector(
    (state: RootState) => selectQuestionByIndex(state, currentIndex),
    isEqual
  );

  return question ? (
    <div className={classes.questionContainer}>
      {question.Type === 'multipleAnswer' && (
        <QMultipleAnswer question={question} currentIndex={currentIndex + 1} />
      )}
      {question.Type === 'multipleChoice' && (
        <QMultipleChoice question={question} currentIndex={currentIndex + 1} />
      )}
      {question.Type === 'shortAnswer' && (
        <QShortAnswer question={question} currentIndex={currentIndex + 1} />
      )}
      {question.Type === 'trueFalse' && (
        <QTrueFalse question={question} currentIndex={currentIndex + 1} />
      )}
      {question.Type === 'withImage' && (
        <QWithImage question={question} currentIndex={currentIndex + 1} />
      )}
    </div>
  ) : (
    <div className={classes.questionContainer} />
  );
};

export default Panel;
