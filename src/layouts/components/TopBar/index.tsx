import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Grid, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 100,
    position: 'relative',
    boxShadow:
      '0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 8px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#692B40',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: 60,
    height: 60,
    [theme.breakpoints.up('md')]: {
      width: 100,
      height: 100
    }
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '26px',
    lineHeight: '32px',
    color: '#FFFFF',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      lineHeight: '32px'
    }
  },
  toolbar: {
    width: '100%',
    height: '100%'
  }
}));

type Props = {};

const TopBar: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs={12} container alignItems="center">
            <Grid item xs={2}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQEyM5-frvRGrQ/company-logo_200_200/0?e=1599696000&v=beta&t=B7E1P4RU1bkIvXk7X3hr9gMRk30n834ndSgx_Ln56jk"
                alt="Preezie logo"
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={8}>
              <div className={classes.title}>JavaScript Quiz</div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
