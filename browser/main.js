import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Home from './components/Home';
import ProductContainer from './components/product/ProductContainer';

// Redux actions and thunks
import store from './store';
import { fetchProduct } from './reducers/product';

const productEnter = (nextState) => store.dispatch(fetchProduct(nextState.params.productId));

render(
  <Provider store={store}>
    <Router history = { browserHistory } >
      <Route path = '/'>
        <IndexRoute component = {Home} />
        <Route path='/products/:productid' component = { ProductContainer } onEnter = { productEnter }
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);