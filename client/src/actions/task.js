import axios from 'axios';

import {
  TASK_FETCH,
  TASK_FETCH_FULFILLED,
  TASK_FETCH_REJECTED
} from '../actionTypes/task';

function fetchTasks() {
  return function func(dispatch) {
    dispatch({ type: TASK_FETCH });

    const jwtToken = window.localStorage.token;

    axios.get(
      'http://localhost:8000/api/tasks/tasks/',
      { headers: { Authorization: `Token ${jwtToken}` } },
    )
      .then((response) => {
        const tasks = response.request.response;
        dispatch({ type: TASK_FETCH_FULFILLED, tasks });
      })
      .catch((err) => {
        dispatch({ type: TASK_FETCH_REJECTED, payload: err });
      });
  };
}

export default fetchTasks;
