import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField, IconButton, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Question } from 'types';
import { saveAnswers } from 'slices/question/action';
import { Edit, CheckCircle, Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '20px',
    height: 280,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: '30px'
    }
  },
  title: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#37474F'
  },
  label: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#37474F'
  },
  currentIndex: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#692B40',
    marginRight: 10
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  groupContainer: {
    marginTop: 20,
    marginLeft: 22
  },
  backIcon: {
    fill: '#692B40'
  },
  backIconButton: {
    position: 'absolute',
    right: -18,
    top: -19
  },
  checkIconCorrect: {
    fill: '#0F8E36',
    marginLeft: 10
  },
  iconIncorrect: {
    fill: '#F44336',
    marginLeft: 10
  },
  resultContainer: {
    position: 'absolute',
    right: -10,
    top: -10
  }
}));

type Props = {
  currentIndex: number;
  question: Question;
  disabled?: boolean;
  click?: (index: number) => void;
  review?: boolean;
  result?: boolean;
};

export const QShortAnswer: React.FC<Props> = ({
  question,
  currentIndex,
  disabled,
  click,
  review,
  result
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([
    ...question.Answers
  ]);

  const textFieldChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setSelectedAnswers([event.target.value]);
  };

  const textFieldOnBlurHandler = () => {
    dispatch(saveAnswers(question, selectedAnswers));
  };

  return (
    <div className={classes.root}>
      {review && (
        <IconButton
          className={classes.backIconButton}
          onClick={() => click && click(currentIndex - 1)}>
          <Edit className={classes.backIcon} />
        </IconButton>
      )}
      {result && (
        <div className={classes.resultContainer}>
          {question.Status === 'Correct' && (
            <CheckCircle className={classes.checkIconCorrect} />
          )}
          {question.Status === 'InCorrect' && (
            <Cancel className={classes.iconIncorrect} />
          )}
        </div>
      )}
      <div className={classes.nameContainer}>
        <div className={classes.currentIndex}>{currentIndex}.</div>
        <div className={classes.title}>{question.Name}</div>
      </div>
      <div className={classes.groupContainer}>
        <TextField
          id="shortAnswer"
          label=""
          variant="outlined"
          placeholder="Type your answer here"
          fullWidth
          multiline
          value={selectedAnswers[0]}
          autoComplete="off"
          rows="7"
          onChange={textFieldChangeHandler}
          onBlur={textFieldOnBlurHandler}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default QShortAnswer;
