import {
  REPORT_FETCH,
  REPORT_FETCH_FULFILLED,
  REPORT_FETCH_REJECTED,
} from '../actionTypes/report';

export default function reducer(state = {
  fetchingReports: false,
  fetchedReports: false,
  fetchingError: null,
  reports: null,
}, action) {
  switch (action.type) {
    case REPORT_FETCH: {
      return { ...state, fetchingReports: true };
    }
    case REPORT_FETCH_FULFILLED: {
      return {
        ...state,
        fetchingReports: false,
        fetchedReports: true,
        reports: action.reports,
      };
    }
    case REPORT_FETCH_REJECTED: {
      return {
        ...state,
        fetchingReports: false,
        fetchingError: action.payload,
      };
    }
    // no default
  }
  return state;
}
