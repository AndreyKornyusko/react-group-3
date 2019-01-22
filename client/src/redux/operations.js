import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess
} from './actions';
import * as selectors from './selectors';

axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post('/auth/signup', credentials)
    .then(({ data }) => dispatch(signUpSuccess(data)))
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('/auth/signin', credentials)
    .then(({ data }) => dispatch(signInSuccess(data)))
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());

  const token = selectors.getToken(getState());

  const config = {
    headers: {
      Authorization: token
    }
  };

  axios
    .post('/auth/signout', {}, config)
    .then(() => dispatch(signOutSuccess()));
};
