/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

// Interceptor 설정
const interceptor = axios.interceptors;
interceptor.request.use(
  (config) => {
    config.headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };

    return config;
  },
  (error) => {
    console.log(error);
  }
);

interceptor.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      window.location.href = 'login';
    }

    return error;
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
