import { combineReducers } from 'redux';

import registration from './registrationReducer';
import login from './loginReducer';
import timer from './timerReducer';

export default combineReducers({
  registration,
  login,
  timer,
});
