import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Theme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Question } from 'types';
import { saveAnswers } from 'slices/question/action';
import { Edit, Check, Close, CheckCircle, Cancel } from '@material-ui/icons';

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
  choiceContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  groupContainer: {
    marginLeft: 10
  },
  backIcon: {
    fill: '#692B40'
  },
  backIconButton: {
    position: 'absolute',
    right: -18,
    top: -19
  },
  checkIcon: {
    marginLeft: 10,
    marginBottom: 3,
    fill: '#0F8E36'
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 3,
    fill: '#F44336'
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

export const QMultipleChoice: React.FC<Props> = ({
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

  const radioBoxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setSelectedAnswers([event.target.value]);
  };

  const radioOnBlurHandler = () => {
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
        <RadioGroup
          aria-label="choices"
          name="choices"
          style={{ paddingLeft: '10px' }}
          value={selectedAnswers[0]}
          onChange={event => radioBoxChangeHandler(event)}
          onBlur={radioOnBlurHandler}>
          {question.Choices.map(choice => {
            return (
              <FormControlLabel
                key={choice.Id}
                value={choice.Value}
                control={<Radio color="primary" />}
                label={
                  <div className={classes.choiceContainer}>
                    <div className={classes.label}>{choice.Name}</div>
                    {question.Status === 'Correct' &&
                      question.Answers.includes(choice.Value) && (
                        <Check className={classes.checkIcon} />
                      )}
                    {question.Status === 'InCorrect' &&
                      question.Answers.includes(choice.Value) && (
                        <Close className={classes.closeIcon} />
                      )}
                  </div>
                }
                disabled={disabled}
              />
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QMultipleChoice;
