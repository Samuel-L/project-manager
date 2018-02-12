import { axiosInstance } from '../utils/axiosInstance';

import {
  REPORT_FETCH,
  REPORT_FETCH_FULFILLED,
  REPORT_FETCH_REJECTED,
} from '../actionTypes/report';

function fetchReports() {
  return function func(dispatch) {
    dispatch({ type: REPORT_FETCH });

    axiosInstance({
      method: 'get',
      url: '/reports/'
    })
      .then((response) => {
        const reports = response.request.response;
        dispatch({ type: REPORT_FETCH_FULFILLED, reports });
      })
      .catch((err) => {
        dispatch({ type: REPORT_FETCH_REJECTED, payload: err });
      });
  };
}

export default fetchReports;
