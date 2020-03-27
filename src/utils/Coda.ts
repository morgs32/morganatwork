import axios, {AxiosRequestConfig} from 'axios';
import handleAxios from './handleAxios';

class API {
  constructor(token: string) {

    if (!token) {
      throw Error('No CODA token provided');
    }
    this.axios = axios.create({
      baseURL: 'https://coda.io/apis/v1beta1',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  axios = null;

  get(url: string, params: any = {}) {
    return this.request({ url, params, method: 'get' });
  }

  post(url: string, data: any = {}, params: any = {}) {
    return this.request({ url, data, params, method: 'post' });
  }

  request(options: AxiosRequestConfig): Promise<any> {
    return this.axios(options)
      .then(res => res.data)
      .catch(handleAxios)
  }
}

export default API;

export const coda = new API(process.env.CODA_TOKEN);
