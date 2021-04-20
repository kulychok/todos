import { takeLatest } from 'redux-saga/effects';
import userSagas from '../app/auth/sagas';
import todoSagas from '../app/todo/sagas';
import {
  GET_USER_REQUEST,
  LOG_IN_REQUEST,
  SIGN_IN_REQUEST,
  ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  EDIT_TODO_REQUEST,
  GET_TODO_LIST_REQUEST,
} from '../constants/actionTypes';

export function* rootSaga() {
  yield takeLatest(GET_USER_REQUEST, userSagas.get);
  yield takeLatest(LOG_IN_REQUEST, userSagas.login);
  yield takeLatest(SIGN_IN_REQUEST, userSagas.signup);

  yield takeLatest(ADD_TODO_REQUEST, todoSagas.add);
  yield takeLatest(DELETE_TODO_REQUEST, todoSagas.del);
  yield takeLatest(EDIT_TODO_REQUEST, todoSagas.edit);
  yield takeLatest(GET_TODO_LIST_REQUEST, todoSagas.get);
}
