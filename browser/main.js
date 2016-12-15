import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Home from './components/Home';
import ProductContainer from './components/product/ProductContainer';
import AllProductsContainer from './components/products/AllProductsContainer';

// Redux actions and thunks
import store from './store';
import { fetchProduct } from './reducers/product';
import { fetchProducts } from './reducers/products';

const appEnter = () => {
  store.dispatch(fetchProducts());
}
const productEnter = (nextState) => store.dispatch(fetchProduct(nextState.params.productId));

render(
  <Provider store={store}>
    <Router history = { browserHistory } >
      <IndexRoute path = '/' component = { Home } onEnter = { appEnter } />
        <Route path = '/products' component = { AllProductsContainer } onEnter = {allProductEnter } />
        <Route path='/products/:productid' component = { ProductContainer } onEnter = { productEnter } />
    </Router>
  </Provider>,
  document.getElementById('main')
);