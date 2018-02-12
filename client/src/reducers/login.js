import {
  LOGIN,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
  CHANGE_LOGIN_STATUS,
} from '../actionTypes/login';

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
    case CHANGE_LOGIN_STATUS: {
      return { ...state, loggedIn: action.payload };
    }
    // no default
  }
  return state;
}
