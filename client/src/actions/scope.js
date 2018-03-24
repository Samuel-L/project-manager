import { axiosInstance } from '../utils/axiosInstance';

import {
  SCOPE_FETCH,
  SCOPE_FETCH_FULFILLED,
  SCOPE_FETCH_REJECTED,
} from '../actionTypes/scope';

function fetchScopes() {
  return function func(dispatch) {
    dispatch({ type: SCOPE_FETCH });

    axiosInstance({
      method: 'get',
      url: '/tasks/scopes/',
    })
      .then((response) => {
        const scopes = response.request.response;
        dispatch({ type: SCOPE_FETCH_FULFILLED, scopes });
      })
      .catch((err) => {
        dispatch({ type: SCOPE_FETCH_REJECTED, payload: err });
      });
  };
}

export default fetchScopes;
