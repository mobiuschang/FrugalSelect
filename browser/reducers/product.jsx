import axios from 'axios';

// ---------------------> Action type constants <---------------------
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const ADD_REVIEW = 'ADD_REVIEW';

// ----------------> ACTION CREATORS <----------------
export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

// --------------------> THUNKS <--------------------

export const fetchProduct = (id) => dispatch => {
  axios.get(`/api/products/${id}`)
    .then(res => dispatch(receiveProduct(res.data)))
    .catch(err => {
      console.error('Unable to fetch product', err);
    });
};

// --------------------> REDUCER <--------------------
export default function product(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
