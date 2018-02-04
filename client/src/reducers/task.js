import {
  TASK_FETCH,
  TASK_FETCH_FULFILLED,
  TASK_FETCH_REJECTED,
} from '../actionTypes/task';

export default function reducer(state = {
  fetchingTasks: false,
  fetchedTasks: false,
  fetchingError: null,
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
    // no default
  }
  return state;
}
