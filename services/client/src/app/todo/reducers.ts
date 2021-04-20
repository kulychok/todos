import {
  CHANGE_CURRENT_PAGE,
  CHANGE_NEW_TODO_TITLE,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  API_CALL_FAILURE,
  CHANGE_FILTER_TYPE,
  GET_TODO_LIST_SUCCESS,
} from '../../constants/actionTypes';
import { isValidTodoTitle } from '../../helpers/validators';

const initialState = {
  todoList: null,
  filterType: 'ALL',
  currentPage: 0,
  limit: 0,
  countPage: 0,
  count: { all: 0, active: 0, completed: 0 },
  newTodoTitle: '',
  errorMessage: '',
};

export const todoReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    count: { ...state.count },
    todoList: { ...state.todoList },
  };

  switch (action.type) {
    case CHANGE_NEW_TODO_TITLE: {
      if (isValidTodoTitle(action.newTodoTitle)) {
        stateCopy.newTodoTitle = action.newTodoTitle;
        stateCopy.errorMessage = '';
      } else {
        stateCopy.errorMessage = 'You can type only letters and numbers';
      }

      break;
    }
    // case 'CHANGE_TODO_TITLE': {
    //   if (isValidTodoTitle(action.newTodoTitle)) {
    //     for (let i in stateCopy.todoList) {
    //       if (stateCopy.todoList[i].id === action.id) {
    //         stateCopy.todoList[i].title = action.newTodoTitle;
    //       }
    //     }
    //     stateCopy.errorMessage = '';
    //   } else {
    //     stateCopy.errorMessage = 'You can type only letters and numbers';
    //   }

    //   break;
    // }
    case CHANGE_CURRENT_PAGE: {
      stateCopy.currentPage = action.page;

      break;
    }
    case DELETE_TODO_SUCCESS:
    case EDIT_TODO_SUCCESS:
    case GET_TODO_LIST_SUCCESS: {
      stateCopy.todoList = { ...action.todoData.todoList };
      stateCopy.count = { ...action.todoData.count };
      stateCopy.countPage = action.todoData.countPage;
      stateCopy.limit = action.todoData.limit;

      break;
    }
    case ADD_TODO_SUCCESS: {
      stateCopy.newTodoTitle = '';

      break;
    }
    case CHANGE_FILTER_TYPE: {
      stateCopy.filterType = action.filterType;

      break;
    }
    case API_CALL_FAILURE:
      return { ...stateCopy, fetching: false, body: null, error: action.error };
  }

  return stateCopy;
};
