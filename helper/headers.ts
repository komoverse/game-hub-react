import axios from 'axios';
import state from '@/store/index';
import { BASE_URL_API, BASE_URL_API_KEY } from '@/helper/env';

const headers = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': true,
  'x-api-key': BASE_URL_API_KEY,
};

const komoverseAxiosIns = axios.create({
  baseURL: BASE_URL_API,
  headers,
});

komoverseAxiosIns.interceptors.request.use(
  async (config) => {
    const { login = {} } = state.getState();
    const { token } = login;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default komoverseAxiosIns;
