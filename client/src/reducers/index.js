import { combineReducers } from 'redux';

import register from './register';
import login from './login';
import timer from './timer';

export default combineReducers({
  register,
  login,
  timer,
});
