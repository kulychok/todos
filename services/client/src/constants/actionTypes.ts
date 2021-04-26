//auth reducer actions
export const CHANGE_AUTH_STATUS = 'CHANGE_AUTH_STATUS';
export const CHANGE_AUTH_FIELDS = 'CHANGE_AUTH_FIELDS';
export const LOG_OUT = 'LOG_OUT';
export const GET_USER_SUCCESS = 'GET_USER.Success';

//todo reducer actions
export const CHANGE_NEW_TODO_TITLE = 'CHANGE_NEW_TODO_TITLE';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO.Success';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO.Success';
export const ADD_TODO_SUCCESS = 'ADD_TODO.Success';
export const GET_TODO_LIST_SUCCESS = 'GET_TODO_LIST.Success';
export const DELETE_COMPLETED_SUCCESS = 'DELETE_COMPLETED.Success';
export const CHANGE_FILTER_TYPE = 'CHANGE_FILTER_TYPE';
export const CHANGE_TOGGLE_ALL_STATUS = 'CHANGE_TOGGLE_ALL_STATUS';

//saga requests actions
export const GET_USER_REQUEST = 'GET_USER.Request';
export const LOG_IN_REQUEST = 'LOG_IN.Request';
export const SIGN_IN_REQUEST = 'SIGN_UP.Request';
export const ADD_TODO_REQUEST = 'ADD_TODO.Request';
export const DELETE_TODO_REQUEST = 'DELETE_TODO.Request';
export const EDIT_TODO_REQUEST = 'EDIT_TODO.Request';
export const GET_TODO_LIST_REQUEST = 'GET_TODO_LIST.Request';
export const DELETE_COMPLETED_REQUEST = 'DELETE_COMPLETED.Request';
export const PATCH_TO_ACTIVE_REQUEST = 'PATCH_TO_ACTIVE.Request';
export const PATCH_TO_COMPLETED_REQUEST = 'PATCH_TO_COMPLETED.Request';

export const API_CALL_FAILURE = 'API_CALL.Failure';
