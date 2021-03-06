import { combineReducers } from 'redux';

import register from './register';
import login from './login';
import timer from './timer';
import project from './project';
import task from './task';
import report from './report';
import scope from './scope';

export default combineReducers({
  register,
  login,
  timer,
  project,
  task,
  report,
  scope,
});
