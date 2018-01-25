import { combineReducers } from 'redux';

import registration from './registrationReducer';
import timer from './timerReducer';

export default combineReducers({
  registration,
  timer,
});
