import axios from 'axios';
import { baseURL } from '../utils/axiosInstance';
import {
  LOGIN,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  CHANGE_LOGIN_STATUS,
} from '../actionTypes/login';

function loginUser(username, password) {
  return function func(dispatch) {
    dispatch({ type: LOGIN });

    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    const postPayload = {
      username, password,
    };

    axios.post(`${baseURL}accounts/obtain-auth-token/`, postPayload, headers)
      .then((response) => {
        const { token } = response.data;
        localStorage.token = token;
        dispatch({ type: LOGIN_FULFILLED });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_REJECTED, payload: err });
      });
  };
}

function checkLoginStatus() {
  return function func(dispatch) {
    dispatch({ type: CHANGE_LOGIN_STATUS, payload: !!localStorage.token });
  };
}

function logoutUser() {
  return function func(dispatch) {
    localStorage.removeItem('token');
    dispatch({ type: CHANGE_LOGIN_STATUS, payload: !!localStorage.token });
  };
}

export { loginUser, checkLoginStatus, logoutUser };
