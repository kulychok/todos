import METHODS from '../../../constants/httpMethods';
import callApi from '../../callAPI';

const patchToActive = async (): Promise<void> => {
  const response = await callApi(`/private/todo/active`, METHODS.PATCH);
  await response.json();
};

export default patchToActive;
