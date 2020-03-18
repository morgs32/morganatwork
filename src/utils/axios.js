import axios from 'axios'
import { isDev } from './environment';

if (isDev) {
  axios.defaults.baseURL = `http://localhost:3333`
}
else {
  axios.defaults.baseURL = 'https://www.morganatwork.com';
}

export default axios;
