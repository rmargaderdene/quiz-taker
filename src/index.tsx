import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider as StoreProvider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const render = () => {
  const App = require('./App').default;

  ReactDOM.render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}

serviceWorker.register();
