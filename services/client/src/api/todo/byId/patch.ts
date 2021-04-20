import METHODS from '../../../constants/httpMethods';
import callApi from '../../callAPI';

interface EditTodoBody {
  status?: string;
  title?: string;
}

const editTodo = async (id: number, body: EditTodoBody = {}): Promise<void> => {
  await callApi(`/private/todo/${id}`, METHODS.PATCH, body);
};

export default editTodo;
