import { combineReducers } from 'redux';

import register from './register';
import login from './login';
import timer from './timer';
import project from './project';

export default combineReducers({
  register,
  login,
  timer,
  project,
});
