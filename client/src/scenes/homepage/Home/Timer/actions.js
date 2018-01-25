import { START_TIMER, STOP_TIMER, PAUSE_TIMER, RESUME_TIMER } from './actionTypes';

function startTimer() {
  const action = {
    type: START_TIMER,
    payload: Date.now(),
  };

  return action;
}

function endTimer() {
  const action = {
    type: STOP_TIMER,
    payload: Date.now(),
  };

  return action;
}

function pauseTimer() {
  const action = {
    type: PAUSE_TIMER,
    payload: Date.now(),
  };

  return action;
}

function resumeTimer(pausedStartTime, totalPausedTime) {
  const timeDifference = Date.now() - pausedStartTime;
  const pausedTime = totalPausedTime + timeDifference;

  const action = {
    type: RESUME_TIMER,
    payload: pausedTime,
  };

  return action;
}

export { startTimer, endTimer, pauseTimer, resumeTimer };
