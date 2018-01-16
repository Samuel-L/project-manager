import axios from 'axios';
import { REGISTER,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  RESET_REGISTER_STATE,
} from '../action-types/registrationTypes';

function registerUser(username, password, email) {
  return function func(dispatch) {
    dispatch({ type: REGISTER });

    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    const postPayload = {
      username, password, email,
    };

    axios.post('http://localhost:8000/api/accounts/register/', postPayload, headers)
      .then((response) => {
        dispatch({ type: REGISTER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: REGISTER_REJECTED, payload: err });
      });
  };
}

function resetRegistrationState() {
  const action = {
    type: RESET_REGISTER_STATE,
  };

  return action;
}

export { registerUser, resetRegistrationState };
