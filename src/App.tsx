import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { renderRoutes } from 'react-router-config';

import theme from './theme';
import routes from './routes';
import './assets/index.scss';
import './mock';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
