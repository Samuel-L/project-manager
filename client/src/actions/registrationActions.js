import axios from 'axios';

function registerUser(username, password, email) {
  return function func(dispatch) {
    dispatch({ type: 'REGISTER' });

    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    const postPayload = {
      username, password, email,
    };

    axios.post('http://localhost:8000/api/accounts/register/', postPayload, headers)
      .then((response) => {
        dispatch({ type: 'REGISTER_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'REGISTER_REJECTED', payload: err });
      });
  };
}

export default registerUser;
