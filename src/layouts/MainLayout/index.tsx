import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { makeStyles } from '@material-ui/styles';
import { LinearProgress, Hidden, Theme } from '@material-ui/core';

import { TopBar } from '../components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column'
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    overflow: 'hidden'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto',
    backgroundColor: '#FFFAEA',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFFFFF'
    }
  }
}));

const MainLayout: React.FC<RouteConfigComponentProps> = ({ route }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <TopBar />
      </Hidden>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <main className={classes.content}>
            <Suspense fallback={<LinearProgress />}>
              {route && renderRoutes(route.routes)}
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
