import METHODS from '../../constants/httpMethods';
import IAuthBody from '../../types/IAuthBody';
import IUser from '../../types/IUser';
import callApi from '../callAPI';

const signup = async (body: IAuthBody): Promise<IUser> => {
  const response = await callApi('/auth/signup', METHODS.POST, body);

  const user = await response.json();

  return user;
};

export default signup;
