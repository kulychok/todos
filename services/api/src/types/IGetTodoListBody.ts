import { ITodo } from '.';

export interface IGetTodoListBody {
  todoList: ITodo[];
  limit: number;
  count: { all: number; active: number; completed: number };
}
