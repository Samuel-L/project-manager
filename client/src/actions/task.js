import axios from 'axios';

import {
  TASK_FETCH,
  TASK_FETCH_FULFILLED,
  TASK_FETCH_REJECTED,
  TASK_CREATE,
  TASK_CREATION_FULFILLED,
  TASK_CREATION_REJECTED,
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

function createTask(name, desc, priority, dueDate, project) {
  return function func(dispatch) {
    dispatch({ type: TASK_CREATE });

    const jwtToken = window.localStorage.token;

    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8000/api/',
      headers: { Authorization: `Token ${jwtToken}` },
    });

    axiosInstance({
      method: 'post',
      url: '/tasks/tasks/',
      data: {
        task_name: name,
        task_description: desc,
        priority,
        due_date: dueDate,
        project,
        finished: false,
      },
    })
      .then(() => {
        dispatch({ type: TASK_CREATION_FULFILLED });
      })
      .catch((err) => {
        dispatch({ type: TASK_CREATION_REJECTED, payload: err });
      });
  };
}

export { fetchTasks, createTask };
