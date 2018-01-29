import { LOGIN, LOGIN_REJECTED, LOGIN_FULFILLED } from '../actionTypes/loginTypes';

export default function reducer(state = {
  loggingIn: false,
  loggedIn: false,
  error: null,
}, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loggingIn: true };
    }
    case LOGIN_REJECTED: {
      return { ...state, loggingIn: false, error: action.payload };
    }
    case LOGIN_FULFILLED: {
      return { ...state, loggingIn: false, loggedIn: true };
    }
    // no default
  }
  return state;
}
