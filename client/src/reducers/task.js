import {
  TASK_FETCH,
  TASK_FETCH_FULFILLED,
  TASK_FETCH_REJECTED,
  TASK_CREATE,
  TASK_CREATION_FULFILLED,
  TASK_CREATION_REJECTED,
} from '../actionTypes/task';

export default function reducer(state = {
  fetchingTasks: false,
  fetchedTasks: false,
  fetchingError: null,
  creatingTask: false,
  createdTask: false,
  creationError: null,
  tasks: null,
}, action) {
  switch (action.type) {
    case TASK_FETCH: {
      return { ...state, fetchingTasks: true };
    }
    case TASK_FETCH_FULFILLED: {
      return {
        ...state,
        fetchingTasks: false,
        fetchedTasks: true,
        tasks: action.tasks,
      };
    }
    case TASK_FETCH_REJECTED: {
      return {
        ...state,
        fetchingTasks: false,
        fetchingError: action.payload,
      };
    }
    case TASK_CREATE: {
      return { ...state, creatingTask: true };
    }
    case TASK_CREATION_FULFILLED: {
      return {
        ...state,
        creatingTask: false,
        createdTask: true,
      };
    }
    case TASK_CREATION_REJECTED: {
      return {
        ...state,
        creatingTask: false,
        creationError: action.payload,
      };
    }
    // no default
  }
  return state;
}
