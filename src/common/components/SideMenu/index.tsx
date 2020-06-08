import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import { RootState } from 'reducer';
import { Question } from 'types';
import { isEqual } from 'lodash';
import { CheckCircle, Help } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  nameText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#692B40',
    '&:hover': {
      color: '#FFCE1F'
    }
  },
  enableClick: {
    cursor: 'pointer'
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  selectedLine: {
    color: '#0F8E36'
  },
  checkIconAnswered: {
    fill: '#0F8E36',
    marginLeft: 10
  },
  helpIcon: {
    fill: '#FEE07E',
    marginLeft: 10
  }
}));

type Props = {
  currentIndex: number;
  click: (index: number) => void;
  progress: 'Start' | 'Test' | 'Review' | 'End';
  review: () => void;
  reviewUnlocked: boolean;
};

export const SideMenu: React.FC<Props> = ({
  currentIndex,
  click,
  progress,
  review,
  reviewUnlocked
}) => {
  const classes = useStyles();

  const questions: Question[] = useSelector(
    (state: RootState) => state.question.Questions,
    isEqual
  );

  return (
    <div className={classes.root}>
      {questions.map((question, index) => {
        return (
          <div
            key={question.Id}
            className={clsx(classes.questionContainer, classes.enableClick)}
            onClick={() => click(index)}>
            <div>
              <div
                className={clsx(
                  classes.nameText,
                  index === currentIndex && classes.selectedLine
                )}>{`Q${index + 1}`}</div>
            </div>
            {question.Status === 'Answered' && (
              <CheckCircle className={classes.checkIconAnswered} />
            )}
            {question.Status === '' && <Help className={classes.helpIcon} />}
          </div>
        );
      })}
      {reviewUnlocked && progress !== 'End' && (
        <div
          className={clsx(classes.questionContainer, classes.enableClick)}
          onClick={review}>
          <div
            className={clsx(
              classes.nameText,
              progress === 'Review' && classes.selectedLine
            )}>{`Review`}</div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
