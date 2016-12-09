import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Home from './components/Home';

import store from './store';

render(
  <Provider store={store}>
    <Router history = { browserHistory } >
      <Route path = '/'>
        <IndexRoute component = {Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);