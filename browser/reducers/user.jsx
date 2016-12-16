import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------->Action type constants <---------------

const CREATE_USER = 'CREATE_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// ----------------> Action Creators <---------------
const signup = user => ({
  type: CREATE_USER,
  user
});

const login = user => ({
  type: LOGIN_USER,
  user
});

const logout = user => ({
  type: LOGOUT_USER
});

// --------------------> REDUCER <--------------------
export default function (currentUser = null, action){
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    case LOGIN_USER:
      return action.user;
    case LOGOUT_USER:
      return null;
    default:
      return currentUser;
  }
}

// -------------> Thunks <----------------
export const signupUser = (credentials) => dispatch => {
  axios.post('/api/auth/signup', credentials)
  .then(res => {
    dispatch(signup(res.data));
    browserHistory.push('/');
  })
  .catch(err => console.log("Unable to sign up new account", err))

}

export const loginUser = (credentails) => dispatch => {
  axios.post('/api/auth/login', credentials)
  .then(res => {
    dispatch(login(res.data));
    browserHistory.push('/');
  })
  .catch( err => console.log("Invalid credentails", err))
}

export const logoutUser = () => dispatch => {
  axios.delete('/api/auth/logout')
  .then(() => {
    dispatch(logout());
    browserHistory.push('/');
  })
  .catch( err => console.log("Invalid credentails", err))
}

