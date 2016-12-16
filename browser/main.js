import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './components/Home';
import ProductContainer from './components/product/ProductContainer';
import AllProductsContainer from './components/products/AllProductsContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Redux actions and thunks
import store from './store';
import { fetchProduct } from './reducers/product';
import { fetchProducts } from './reducers/products';

const appEnter = () => {
  store.dispatch(fetchProducts());
}
const productEnter = (nextState) => store.dispatch(fetchProduct(nextState.params.productId));

injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history = { browserHistory } >
        <Route path = '/'>
        <IndexRoute component = { Home } />
            <Route path = '/products' component = { AllProductsContainer }  />
            <Route path='/products/:productid' component = { ProductContainer } onEnter = { productEnter } />
          </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);