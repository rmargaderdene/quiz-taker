import React from 'react';
import clsx from 'clsx';

import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navButton: {
    background: '#692B40',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    '&:hover': {
      background: '#AE466A'
    }
  },
  inActiveNavButton: {
    background: '#C7A6B1',
    '&:hover': {
      background: '#C7A6B1'
    },
    cursor: 'default'
  },
  arrowIcon: {
    fill: '#FFFFFF',
    margin: '8px 0'
  },
  currentPage: {
    margin: '0 30px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#692B40'
  },
  saveText: {
    margin: '12px 0',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#FFFFFF'
  }
}));

type Props = {
  back: () => void;
  next: () => void;
  currentIndex: number;
  totalQuestionsLen: number;
  finish: () => void;
};

export const Navigation: React.FC<Props> = ({
  back,
  next,
  currentIndex,
  totalQuestionsLen,
  finish
}) => {
  const classes = useStyles();

  const finishClickHandler = () => {
    next();
    finish();
  };

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={clsx(
            classes.navButton,
            currentIndex === 1 && classes.inActiveNavButton
          )}
          disabled={currentIndex === 1}
          onClick={back}>
          <ArrowBack className={classes.arrowIcon} />
        </Button>
      </div>
      <div
        className={
          classes.currentPage
        }>{`${currentIndex}/${totalQuestionsLen}`}</div>
      <div>
        {currentIndex === totalQuestionsLen ? (
          <Button className={classes.navButton} onClick={finishClickHandler}>
            <span className={classes.saveText}>Finish</span>
          </Button>
        ) : (
          <Button className={classes.navButton} onClick={next}>
            <ArrowForward className={classes.arrowIcon} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
