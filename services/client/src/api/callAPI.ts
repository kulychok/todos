import METHODS from '../constants/httpMethods';
import config from './config';

const callApi = async (
  path: string,
  method: string,
  body: any = {},
  headers: any = {
    'Content-Type': 'application/json',
  }
): Promise<Response> => {
  const options = {
    method: method,
    headers: { ...headers },
    credentials: 'include',
  };

  if (method !== METHODS.GET) {
    (<any>options).body = JSON.stringify(body);
  }

  const response = await fetch(`${config.domain}${path}`, <any>options);

  return response;
};

export default callApi;
