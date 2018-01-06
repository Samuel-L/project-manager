import axios from 'axios';

export function registerUser(username, password, email) {
  return function (dispatch) {
    dispatch({ type: 'REGISTER' });

    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    const postPayload = {
      username, password, email,
    };

    axios.post('http://localhost:8000/api/accounts/register/', postPayload, headers)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: 'REGISTER_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'REGISTER_REJECTED', payload: err });
      });
  };
}
