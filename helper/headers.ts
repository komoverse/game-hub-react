import axios from 'axios';
import state from '@/store/index';

const headers = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': true,
  'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
};

const komoverseAxiosIns = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
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
