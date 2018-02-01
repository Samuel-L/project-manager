import axios from 'axios';

import { FETCH, FETCH_FULFILLED, FETCH_REJECTED } from '../actionTypes/fetch';

function fetchProjects() {
  return function func(dispatch) {
    dispatch({ type: FETCH });

    const jwtToken = window.localStorage.token;

    axios.get(
      'http://localhost:8000/api/tasks/projects/',
      { headers: { Authorization: `Token ${jwtToken}` } },
    )
      .then((response) => {
        const projects = response.request.response;
        dispatch({ type: FETCH_FULFILLED, projects });
      })
      .catch((err) => {
        dispatch({ type: FETCH_REJECTED, payload: err });
      });
  };
}

export default fetchProjects;
