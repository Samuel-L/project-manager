import axios from 'axios';

import {
  REPORT_FETCH,
  REPORT_FETCH_FULFILLED,
  REPORT_FETCH_REJECTED,
} from '../actionTypes/report';

function fetchReports() {
  return function func(dispatch) {
    dispatch({ type: REPORT_FETCH });

    const jwtToken = window.localStorage.token;

    axios.get(
      'http://localhost:8000/api/reports/',
      { headers: { Authorization: `Token ${jwtToken}` } },
    )
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
