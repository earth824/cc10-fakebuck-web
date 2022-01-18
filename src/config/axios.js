import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8004';

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return config;
  },
  err => Promise.reject(err)
);

export default axios;
