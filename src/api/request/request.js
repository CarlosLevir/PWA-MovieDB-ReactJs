import axios from 'axios';
import env from '../../../.env';

const request = () => {
  axios.create({
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    baseURL: env.API_URL,
  });
};

export default request;
