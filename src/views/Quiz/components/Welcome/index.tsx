import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { Grid, Theme, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { startQuiz } from 'slices/quiz/action';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
    marginTop: 50
  },
  startButton: {
    width: 200,
    background: '#AE466A',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: '#692B40'
    }
  },
  startText: {
    margin: '12px 0',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '16px',
    letterSpacing: '1.25px',
    color: '#FFFFFF'
  },
  image: {
    width: 170,
    height: 170,
    [theme.breakpoints.up('sm')]: {
      width: 200,
      height: 200
    }
  },
  buttonContainer: {
    marginBottom: 50
  },
  instruction: {
    margin: '20px 0 50px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '127.69%',
    letterSpacing: '1.25px',
    color: '#37474F'
  }
}));

type Props = {
  start: () => void;
};

const Welcome: React.FC<Props> = ({ start }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const startButtonClickHandler = () => {
    start();
    dispatch(startQuiz(moment().format('DD/MM/YYYY HH:mm:ss')));
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} container justify="center">
          <div className={classes.instruction}>
            This quiz consists of 5 questions.
            <br />
            To start, click the <b>"Take the Quiz"</b> button.
          </div>
        </Grid>
        <Grid item xs={12} container justify="center">
          <div className={classes.buttonContainer}>
            <Button
              className={classes.startButton}
              onClick={startButtonClickHandler}>
              <span className={classes.startText}>Take the Quiz</span>
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} container justify="center">
          <img
            src="/images/welcome.svg"
            alt="welcome"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
