import dotenv from 'dotenv';
import { AxiosFactory } from '../services/axios';

interface Configs {
  host: string | undefined;
  key: string | undefined;
}
let configs: Configs;

//todo: can put reload boolean paramter, if need to reload and reset configs
export async function getConfigs(): Promise<Configs> {
  try {
    // if configs is setted, getting configs from server is not required
    if (configs) return configs;
    const awsAxios = new AxiosFactory(process.env.AWS_SETTING_URL);
    const response = await awsAxios.instance.get('/fake/config');
    configs = response.data;

    return configs;
  } catch (_) {
    const localConfigs: Configs = {
      host: process.env.host,
      key: process.env.key,
    };
    return localConfigs;
  }
}
