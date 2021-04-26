import { RootState } from '../../types';

export const getTodoListFromObj = (state: RootState) =>
  Object.values(state.todo.todoList).map((todo) => todo);

export const getLastPage = (state: RootState) =>
  Math.floor(state.todo.count.all / state.todo.limit) || 0;
