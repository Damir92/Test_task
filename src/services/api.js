import axios from 'axios';

const MOCK_URL = `https://5fcde5703e19cc00167c4ec7.mockapi.io/api/v1`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: MOCK_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
