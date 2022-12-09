import { Axios } from 'axios';
import axios from 'axios';

export class AxiosFactory {
  readonly baseUrl: string | undefined;
  readonly instance: Axios;
  constructor(baseUrl: string | undefined) {
    this.baseUrl = baseUrl;
    this.instance = axios.create({
      baseURL: this.baseUrl,
    });
  }
}
