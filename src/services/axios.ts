import { Axios } from 'axios';
import axios from 'axios';

export class AxiosFactory {
  readonly baseUrl: string | undefined;
  readonly instance: Axios;

  //todo: header can be added to contrutor, if required
  constructor(baseUrl: string | undefined) {
    this.baseUrl = baseUrl;
    this.instance = axios.create({
      baseURL: this.baseUrl,
    });
  }
}
