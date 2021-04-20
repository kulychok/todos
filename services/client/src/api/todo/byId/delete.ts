import METHODS from '../../../constants/httpMethods';
import callApi from '../../callAPI';

const delTodo = async (id: number): Promise<void> => {
  await callApi(`/private/todo/${id}`, METHODS.DELETE);
};

export default delTodo;
