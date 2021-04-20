import METHODS from '../../constants/httpMethods';
import callApi from '../callAPI';

const getAccessToken = async (): Promise<void> => {
  const refreshToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('refreshToken='))
    .split('=')[1];

  await callApi(`/auth/token`, METHODS.POST, { refreshToken });
};

export default getAccessToken;
