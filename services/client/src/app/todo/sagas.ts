import { call, put } from 'redux-saga/effects';
import api from '../../api';
import FILTERS from '../../constants/filters';
import { ITodoListRequest } from '../../types';
import {
  addTodoSuccess,
  apiCallFailure,
  getTodoListRequest,
  getTodoListSuccess,
} from './actionCreators';

interface IGetTodoListAction {
  type: string;
  filterType: string;
  page: number;
}

function* getTodoList(action: IGetTodoListAction) {
  try {
    let response;
    if (action.filterType === FILTERS.COMPLETED) {
      response = yield call(api.todo.getCompleted, action.page);
    } else if (action.filterType === FILTERS.ACTIVE) {
      response = yield call(api.todo.getActive, action.page);
    } else {
      response = yield call(api.todo.get, action.page);
    }

    const todoData: ITodoListRequest = response;

    yield put(getTodoListSuccess(todoData));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

interface IAddTodoAction {
  type: string;
  body: { title: string };
  filterType: string;
  page: number;
}

function* addTodo(action: IAddTodoAction) {
  try {
    yield call(api.todo.add, action.body);
    yield getTodoList(getTodoListRequest(action.page, action.filterType));

    yield put(addTodoSuccess());
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

interface IDeleteTodoAction {
  type: string;
  id: number;
  filterType: string;
  page: number;
}

function* deleteTodo(action: IDeleteTodoAction) {
  try {
    yield call(api.todo.del, action.id);

    yield getTodoList(getTodoListRequest(action.page, action.filterType));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

interface IEditTodoAction {
  type: string;
  id: number;
  filterType: string;
  page: number;
  title?: string;
}

function* editTodo(action: IEditTodoAction) {
  try {
    yield call(api.todo.patch, action.id, {
      title: action.title,
    });

    yield getTodoList(getTodoListRequest(action.page, action.filterType));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

function* deleteCompletedTodo(action: IGetTodoListAction) {
  try {
    yield call(api.todo.deleteCompleted);

    yield getTodoList(getTodoListRequest(action.page, action.filterType));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

function* patchToActive(action: IGetTodoListAction) {
  try {
    yield call(api.todo.patchToActive);

    yield getTodoList(getTodoListRequest(action.page, action.filterType));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

function* patchToCompleted(action: IGetTodoListAction) {
  try {
    yield call(api.todo.patchToCompleted);

    yield getTodoList(getTodoListRequest(action.page, action.filterType));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

export default {
  get: getTodoList,
  del: deleteTodo,
  add: addTodo,
  edit: editTodo,
  delCompleted: deleteCompletedTodo,
  patchToCompleted,
  patchToActive,
};
