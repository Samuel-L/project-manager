import axios from 'axios';

import { FETCH, FETCH_FULFILLED, FETCH_REJECTED } from '../actionTypes/fetch';

function fetchProjects(username) {
  return function func(dispatch) {
    dispatch({ type: FETCH });

    // TODO: send auth token with request
    axios.get('http://localhost:8000/api/tasks/projects/')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export default fetchProjects;
