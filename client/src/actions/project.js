import { axiosInstance } from '../utils/axiosInstance';

import {
  PROJECT_FETCH,
  PROJECT_FETCH_FULFILLED,
  PROJECT_FETCH_REJECTED,
} from '../actionTypes/project';

function fetchProjects() {
  return function func(dispatch) {
    dispatch({ type: PROJECT_FETCH });

    axiosInstance({
      method: 'get',
      url: '/tasks/projects/',
    })
      .then((response) => {
        const projects = response.request.response;
        dispatch({ type: PROJECT_FETCH_FULFILLED, projects });
      })
      .catch((err) => {
        dispatch({ type: PROJECT_FETCH_REJECTED, payload: err });
      });
  };
}

export default fetchProjects;
