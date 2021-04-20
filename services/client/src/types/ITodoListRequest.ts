import { ITodo } from '.';

export default interface ITodoListRequest {
  count: { all: number; active: number; completed: number };
  todoList: ITodo[];
  limit: number;
  countPage: number;
}
