import axios from 'axios';

const jwtToken = window.localStorage.token;
const baseURL = 'http://localhost:8000/api/';

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Token ${jwtToken}` },
});

export { axiosInstance, baseURL };
