import { FETCH, FETCH_FULFILLED, FETCH_REJECTED } from '../actionTypes/fetch';

export default function reducer(state = {
  fetchingProjects: false,
  fetchedProjects: false,
  fetchingError: null,
  projectIds: [],
  projects: [],
}, action) {
  switch (action.type) {
    case FETCH: {
      return { ...state, fetchingProjects: true };
    }
    case FETCH_FULFILLED: {
      return {
        ...state,
        fetchingProjects: false,
        fetchedProjects: true,
        projectIds: action.projectIds,
        projects: action.projects,
      };
    }
      case FETCH_REJECTED: {
        return {
          ...state,
          fetchingProjects: false,
          fetchingError: action.payload
        };
      }
    // no default
  }
  return state;
}
