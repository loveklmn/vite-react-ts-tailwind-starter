import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import showCodeMessage from './code';
import { formatJsonToUrlParams, InstanceObject } from './utils';

import { BASE_PREFIX } from '../utils/env';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: logic before sending request
    // TODO: loading
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
    // eslint-disable-next-line no-console
    console.error(response.status);
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      console.error(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    // eslint-disable-next-line no-console
    console.warn('Something wrong with Internet. Please try again');
    return Promise.reject(error);
  }
);
const service = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data);
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: InstanceObject) => {
    window.location.href = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(
      data
    )}`;
  },
};

export default service;
