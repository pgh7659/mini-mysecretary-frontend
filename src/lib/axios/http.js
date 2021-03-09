import axios from 'axios';

// Interceptor 설정 !!
// const interceptor = axios.interceptors;
// interceptor.request.use()

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
