import { REGISTER, REGISTER_REJECTED, REGISTER_FULFILLED, RESET_REGISTER_STATE } from '../actionTypes/register';

export default function reducer(state = {
  registering: false,
  registered: false,
  error: null,
}, action) {
  switch (action.type) {
    case REGISTER: {
      return { ...state, registering: true };
    }
    case REGISTER_REJECTED: {
      return { ...state, registering: false, error: action.payload };
    }
    case REGISTER_FULFILLED: {
      return { ...state, registering: false, registered: true };
    }
    case RESET_REGISTER_STATE: {
      return {
        ...state, registering: false, registered: false, error: null,
      };
    }
    // no default
  }
  return state;
}
