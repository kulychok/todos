import METHODS from '../../constants/httpMethods';
import IUserRequest from '../../types/IUserRequest';

import callApi from '../callAPI';

const getUser = async (): Promise<IUserRequest> => {
  const response = await callApi('/private/user', METHODS.GET);
  const status = response.status;
  let user;
  status === 200 && (user = await response.json());

  return { status, user };
};

export default getUser;
