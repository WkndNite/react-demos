import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:9527',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getStuListApi = () => {
  return request({
    url: '/students',
    method: 'get',
  });
}