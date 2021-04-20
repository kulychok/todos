import METHODS from '../../constants/httpMethods';
import IAuthBody from '../../types/IAuthBody';
import callApi from '../callAPI';
import IUser from '../../types/IUser';

const login = async (body: IAuthBody): Promise<IUser> => {
  const response = await callApi('/auth/login', METHODS.POST, body);

  const user = await response.json();

  return user;
};

export default login;
