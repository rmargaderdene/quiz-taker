import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import {
  Theme,
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Hidden
} from '@material-ui/core';
import { Timer, ViewList } from '@material-ui/icons';

import useInterval from 'common/hooks/useInterval';
import { SideMenu } from 'common/components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%'
  },
  timerContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 20px 0 20px'
  },
  timerIcon: {
    fill: '#FA7268',
    marginRight: 10
  },
  timeText: {
    width: 50,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '127.69%',
    letterSpacing: '1.25px',
    color: '#37474F'
  },
  restartButton: {
    background: '#AE466A',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: '#692B40'
    }
  },
  restartText: {
    margin: '3px 0',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: '12px',
    letterSpacing: '1.25px',
    color: '#FFFFFF'
  },
  buttonContainer: {
    margin: '20px 20px 0 20px'
  },
  viewListIcon: {
    fill: '#C57D7D'
  },
  sideMenuContainer: {
    padding: '0 20px'
  }
}));

type Props = {
  currentIndex: number;
  changeQuestion: (index: number) => void;
  progress: 'Start' | 'Test' | 'Review' | 'End';
  startReview: () => void;
  reviewUnlocked: boolean;
};

export const Toolbar: React.FC<Props> = ({
  currentIndex,
  changeQuestion,
  progress,
  startReview,
  reviewUnlocked
}) => {
  const classes = useStyles();

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const timerChangeHandler = () => {
    if (second === 59) {
      setMinute(value => value + 1);
      setSecond(0);
    }
    if (minute === 59 && second === 59) {
      setHour(value => value + 1);
      setMinute(0);
      setSecond(0);
    }
  };

  useInterval(() => {
    setSecond(value => value + 1);
    timerChangeHandler();
  });

  const restartButtonClickHandler = () => {
    window.location.reload(false);
  };

  // For mobile
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const selectQuestionCloseDialog = (index: number) => {
    changeQuestion(index);
    setOpenSideMenu(false);
  };

  const startReviewCloseDialog = () => {
    startReview();
    setOpenSideMenu(false);
  };

  const sideMenuDialog = (
    <Dialog open={openSideMenu} onClose={() => setOpenSideMenu(false)}>
      <DialogContent>
        <div className={classes.sideMenuContainer}>
          <SideMenu
            currentIndex={currentIndex}
            click={selectQuestionCloseDialog}
            progress={progress}
            review={startReviewCloseDialog}
            reviewUnlocked={reviewUnlocked}
          />
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} container justify="space-between">
          {progress !== 'End' && (
            <Hidden smUp>
              <div className={classes.buttonContainer}>
                <IconButton onClick={() => setOpenSideMenu(true)}>
                  <ViewList className={classes.viewListIcon} fontSize="large" />
                </IconButton>
              </div>
            </Hidden>
          )}
          <div />
          {progress !== 'End' ? (
            <div className={classes.timerContainer}>
              <Timer className={classes.timerIcon} />
              <div
                className={
                  classes.timeText
                }>{`0${hour}:${minute}:${second}`}</div>
            </div>
          ) : (
            <div className={classes.buttonContainer}>
              <Button
                className={classes.restartButton}
                onClick={restartButtonClickHandler}>
                <span className={classes.restartText}>Restart</span>
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
      {openSideMenu && sideMenuDialog}
    </div>
  );
};

export default Toolbar;
