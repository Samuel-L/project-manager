import auth from '../utils/auth';
import { LOGIN, LOGIN_FULFILLED, LOGIN_REJECTED } from '../actionTypes/login';

function loginUser(username, password) {
  return function func(dispatch) {
    dispatch({ type: LOGIN });

    auth.login(username, password);
    const loggedIn = auth.loggedIn();

    if (loggedIn) {
      dispatch({ type: LOGIN_FULFILLED });
    } else {
      dispatch({ type: LOGIN_REJECTED });
    }
  };
}

export default loginUser;
