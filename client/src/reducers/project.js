import {
  PROJECT_FETCH,
  PROJECT_FETCH_FULFILLED,
  PROJECT_FETCH_REJECTED,
} from '../actionTypes/project';

export default function reducer(state = {
  fetchingProjects: false,
  fetchedProjects: false,
  fetchingError: null,
  projects: null,
}, action) {
  switch (action.type) {
    case PROJECT_FETCH: {
      return { ...state, fetchingProjects: true };
    }
    case PROJECT_FETCH_FULFILLED: {
      return {
        ...state,
        fetchingProjects: false,
        fetchedProjects: true,
        projects: action.projects,
      };
    }
    case PROJECT_FETCH_REJECTED: {
      return {
        ...state,
        fetchingProjects: false,
        fetchingError: action.payload,
      };
    }
    // no default
  }
  return state;
}
