import axios from 'axios';

const headers = {
  Accept: 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
  'Access-Control-Allow-Origin': true,
  'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
};

const komoverseAxiosIns = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers,
});

komoverseAxiosIns.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default komoverseAxiosIns;
