import {
  SCOPE_FETCH,
  SCOPE_FETCH_FULFILLED,
  SCOPE_FETCH_REJECTED,
} from '../actionTypes/scope';

export default function reducer(state = {
  fetchingScopes: false,
  fetchedScopes: false,
  fetchingError: null,
  scopes: null,
}, action) {
  switch (action.type) {
    case SCOPE_FETCH: {
      return { ...state, fetchingScopes: true };
    }
    case SCOPE_FETCH_FULFILLED: {
      return {
        ...state,
        fetchingScopes: false,
        fetchedScopes: true,
        scopes: action.scopes,
      };
    }
    case SCOPE_FETCH_REJECTED: {
      return {
        ...state,
        fetchingScopes: false,
        fetchingError: action.payload,
      };
    }
    // no default
  }
  return state;
}
