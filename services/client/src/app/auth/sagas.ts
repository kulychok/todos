import { call, put } from 'redux-saga/effects';
import api from '../../api';
import IUserRequest from '../../types/IUserRequest';
import { apiCallFailure } from '../todo/actionCreators';
import { getUserSuccess } from './actionCreators';

function* getUser() {
  try {
    const response: IUserRequest = yield call(api.user.get);

    const { status, user } = response;
    if (status === 401) {
      yield getAccessToken();
    }

    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

function* getAccessToken() {
  try {
    yield call(api.user.getAccessToken);

    yield getUser();
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

interface IAuthAction {
  type: string;
  body: { email: string; password: string };
}

function* login(action: IAuthAction) {
  try {
    const response: IUserRequest = yield call(api.user.login, action.body);

    const { user } = response;

    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

function* signup(action: IAuthAction) {
  try {
    const response: IUserRequest = yield call(api.user.signup, action.body);

    const { user } = response;

    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

export default { get: getUser, login, signup };
