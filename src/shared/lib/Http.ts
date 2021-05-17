import axios from 'axios';
import { getAccessToken } from './localStorage';

const Http = axios.create({
  baseURL: 'https://api.advoguide.staging.luby.com.br',
});

Http.interceptors.request.use(async (config) => {
  let isExistToken;
  await getAccessToken().then((token) => (isExistToken = token));
  if (isExistToken) {
    config.headers['Authorization'] = 'Bearer ' + isExistToken;
  }
  return config;
});
export default Http;
