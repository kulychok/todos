import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  API_CALL_FAILURE,
  CHANGE_CURRENT_PAGE,
  CHANGE_FILTER_TYPE,
  CHANGE_NEW_TODO_TITLE,
  DELETE_COMPLETED_REQUEST,
  DELETE_COMPLETED_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  GET_TODO_LIST_REQUEST,
  GET_TODO_LIST_SUCCESS,
  PATCH_TO_ACTIVE_REQUEST,
  PATCH_TO_COMPLETED_REQUEST,
} from '../../constants/actionTypes';

export const getTodoListRequest = (page: number, filterType?: string) => ({
  type: GET_TODO_LIST_REQUEST,
  page,
  filterType,
});

export const deleteTodo = (id: number, page: number, filterType: string) => ({
  type: DELETE_TODO_REQUEST,
  id,
  page,
  filterType,
});

export const deleteTodoSuccess = () => ({ type: DELETE_TODO_SUCCESS });

export const editTodo = (
  id: number,
  page: number,
  filterType: string,
  title?: string
) => ({ type: EDIT_TODO_REQUEST, id, title, page, filterType });

export const editTodoSuccess = () => ({ type: EDIT_TODO_SUCCESS });

export const changeTodoTitle = (id: number, newTodoTitle: string) => ({
  type: 'CHANGE_TODO_TITLE',
  id,
  newTodoTitle,
});

export const addTodo = (
  title: string,
  status: string,
  page: number = 0,
  filterType: string
) => {
  return {
    type: ADD_TODO_REQUEST,
    body: { title, status },
    page,
    filterType,
  };
};

export const changeNewTodoTitle = (newTodoTitle: string) => ({
  type: CHANGE_NEW_TODO_TITLE,
  newTodoTitle,
});

export const changeCurrentPage = (page: number) => ({
  type: CHANGE_CURRENT_PAGE,
  page,
});

export const changeFilterType = (filterType: string) => ({
  type: CHANGE_FILTER_TYPE,
  filterType,
});

export const apiCallFailure = (error) => ({
  type: API_CALL_FAILURE,
  error,
});

export const getTodoListSuccess = (todoData) => ({
  type: GET_TODO_LIST_SUCCESS,
  todoData,
});

export const addTodoSuccess = () => ({ type: ADD_TODO_SUCCESS });

export const deleteCompleted = (page: number, filterType?: string) => ({
  type: DELETE_COMPLETED_REQUEST,
  page,
  filterType,
});

export const patchToActive = (page: number, filterType?: string) => ({
  type: PATCH_TO_ACTIVE_REQUEST,
  page,
  filterType,
});

export const patchToCompleted = (page: number, filterType?: string) => ({
  type: PATCH_TO_COMPLETED_REQUEST,
  page,
  filterType,
});
