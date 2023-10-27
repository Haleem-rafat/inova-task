import { envConfig } from '@app/config';
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: envConfig.base_url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
