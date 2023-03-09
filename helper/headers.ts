import axios from 'axios';
import Router from 'next/router';

import state from '@/store/index';
import actionAuth from '@/store/auth/action';
import actionLogin from '@/store/auth/action';
import { BASE_URL_API, BASE_URL_API_KEY } from '@/helper/env';
import { refreshAccessToken } from '@/services/auth';

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
  async (error) => {
    return Promise.reject(error);
  }
);

komoverseAxiosIns.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 403 &&
      error.response.data.messages['unauthorizedToken'] ===
        'You are not authorized to perform this request.' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const data = await refreshAccessToken();

      actionLogin.setAuthLogin({
        token: data.new_token,
        message: data.message,
        success: true,
      });

      return komoverseAxiosIns(originalRequest);
    }

    if (
      error.response.status === 404 &&
      (error.response.data.messages === 'The token has been blacklisted' ||
        error.response.data.messages ===
          'Token has expired and can no longer be refreshed')
    ) {
      actionAuth.clearAuthLogin();
      Router.reload();
      return null;
    }

    return Promise.reject(error);
  }
);

export default komoverseAxiosIns;
