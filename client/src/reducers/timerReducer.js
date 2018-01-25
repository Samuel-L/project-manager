import { START_TIMER, STOP_TIMER, PAUSE_TIMER, RESUME_TIMER } from '../scenes/homepage/Home/Timer/actionTypes';

export default function reducer(state = {
  startTime: 0,
  endTime: 0,
  pausedStartTime: 0,
  pausedTimeTotal: 0,
  running: false,
}, action) {
  switch (action.type) {
    case START_TIMER: {
      return { ...state, startTime: action.payload, running: true };
    }
    case STOP_TIMER: {
      return { ...state, endTime: action.payload, running: false };
    }
    case PAUSE_TIMER: {
      return { ...state, pausedStartTime: action.payload, running: false };
    }
    case RESUME_TIMER: {
      return { ...state, pausedTimeTotal: action.payload, running: true };
    }
    // no default
  }
  return state;
}
