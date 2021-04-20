import METHODS from '../../constants/httpMethods';
import ITodoListRequest from '../../types/ITodoListRequest';
import callApi from '../callAPI';

const getTodo = async (page: number = 0): Promise<ITodoListRequest> => {
  const response = await callApi(`/private/todo/?page=${page}`, METHODS.GET);
  const { count, todoList, limit } = await response.json();

  return { count, todoList, limit, countPage: count.all };
};

export default getTodo;
