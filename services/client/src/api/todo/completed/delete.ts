import METHODS from '../../../constants/httpMethods';
import callApi from '../../callAPI';

const deleteCompletedTodo = async (): Promise<void> => {
  const response = await callApi(`/private/todo/completed`, METHODS.DELETE);
  await response.json();
};

export default deleteCompletedTodo;
