import METHODS from '../../../constants/httpMethods';
import callApi from '../../callAPI';

const patchToCompleted = async (): Promise<void> => {
  const response = await callApi(`/private/todo/completed`, METHODS.PATCH);
  await response.json();
};

export default patchToCompleted;
