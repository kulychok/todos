import METHODS from '../../constants/httpMethods';
import callApi from '../callAPI';

const postTodo = async (body: { title: string }): Promise<void> => {
  await callApi('/private/todo', METHODS.POST, body);
};

export default postTodo;
