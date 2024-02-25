// src/apis/configs/axiosConfigs.js

import axios, { AxiosRequestConfig } from 'axios';
import os from 'os';

// initializing the axios instance with custom configs
const axiosApi = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  // adding a custom language header
  headers: {
    'Custom-Language': 'en',
    'x-custom-header-1': 'custom-value',
  },
});

// defining a custom error handler for all APIs
export const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

export const interceptorFunc = () => {
  // registering the custom error handler to the
  // "api" axios instance
  axiosApi.interceptors.request.use(
    async config => {
      console.log({ a: '123', hostName: os.hostname() });

      config.headers['x-custom-header'] = 'custom-value';
      config.headers['hostName'] = os.hostname();

      console.log({ headers: config.headers });

      return config;
    },
    error => {
      console.log('Axios Interceptor');
      return errorHandler(error);
    },
  );
};

export default axiosApi;
