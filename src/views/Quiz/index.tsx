import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Hidden, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { TopBar } from 'layouts/components';
import { SideMenu, Navigation } from 'common/components';
import { Panel, Review, Result, Welcome, Toolbar } from './components';
import { fetchQuestions } from 'slices/question/action';
import { RootState } from 'reducer';
import { selectQuestionsSize } from 'selectors/quiz';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
    marginTop: 0,
    [theme.breakpoints.up('sm')]: {
      marginTop: 30
    }
  },
  rootGrid: {
    backgroundColor: '#FFFAEA',
    [theme.breakpoints.up('sm')]: {
      boxShadow: '0 0 11px rgba(0,0,0,.12)'
    }
  },
  sideMenuContainer: {
    margin: '50px 0 0 30px'
  },
  navigationContainer: {
    margin: '30px 0 100px 0'
  }
}));

export const Quiz: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const questionsSize: number = useSelector((state: RootState) =>
    selectQuestionsSize(state)
  );

  const [reviewUnlocked, setReviewUnlocked] = useState(false);
  const [progress, setProgress] = useState<'Start' | 'Test' | 'Review' | 'End'>(
    'Start'
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    const fetchEvents = () => {
      if (mounted) {
        dispatch(fetchQuestions());
      }
    };
    fetchEvents();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  // Navigation
  const changeQuestion = (index: number) => {
    setCurrentIndex(index);
    setProgress('Test');
  };

  const back = () => {
    currentIndex > 0 && setCurrentIndex(value => value - 1);
  };

  const next = () => {
    currentIndex < questionsSize - 1 && setCurrentIndex(value => value + 1);
    if (currentIndex === questionsSize - 1) {
      setProgress('Review');
      setReviewUnlocked(true);
      setCurrentIndex(-1);
    }
  };

  const returnToQuestion = (index: number) => {
    setCurrentIndex(index);
    setProgress('Test');
  };

  const startReview = () => {
    setProgress('Review');
    setCurrentIndex(-1);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={7}
          xl={6}
          className={classes.rootGrid}
          container
          justify="center">
          <Hidden xsDown>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
          </Hidden>

          {progress !== 'Start' && (
            <>
              <Grid item xs={12}>
                <Toolbar
                  currentIndex={currentIndex}
                  changeQuestion={changeQuestion}
                  progress={progress}
                  startReview={startReview}
                  reviewUnlocked={reviewUnlocked}
                />
              </Grid>
              {progress === 'Review' || progress === 'Test' ? (
                <Hidden xsDown>
                  <Grid item xs={2} sm={3} container justify="center">
                    <div className={classes.sideMenuContainer}>
                      <SideMenu
                        currentIndex={currentIndex}
                        click={changeQuestion}
                        progress={progress}
                        review={startReview}
                        reviewUnlocked={reviewUnlocked}
                      />
                    </div>
                  </Grid>
                </Hidden>
              ) : (
                <Grid item xs={2} />
              )}
            </>
          )}

          {progress === 'Start' ? (
            <Grid item xs={12} container>
              <Welcome start={() => setProgress('Test')} />
            </Grid>
          ) : (
            <>
              <Grid item xs={11} sm={8} lg={8} container>
                {progress === 'Test' && (
                  <>
                    <Grid item xs={12}>
                      <Panel currentIndex={currentIndex} />
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.navigationContainer}>
                        <Navigation
                          back={back}
                          next={next}
                          currentIndex={
                            questionsSize === 0 ? 0 : currentIndex + 1
                          }
                          totalQuestionsLen={
                            questionsSize === 0 ? 0 : questionsSize
                          }
                          finish={() => setProgress('Review')}
                        />
                      </div>
                    </Grid>
                  </>
                )}
                {progress === 'Review' && (
                  <Grid item xs={12}>
                    <Review
                      back={() => returnToQuestion(questionsSize - 1)}
                      returnToQuestion={index => returnToQuestion(index)}
                      submit={() => setProgress('End')}
                    />
                  </Grid>
                )}
                {progress === 'End' && (
                  <Grid item xs={12}>
                    <Result />
                  </Grid>
                )}
              </Grid>
              <Hidden xsDown>
                <Grid item xs={1} />
              </Hidden>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Quiz;
