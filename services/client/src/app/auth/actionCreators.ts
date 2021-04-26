import {
  CHANGE_AUTH_FIELDS,
  CHANGE_AUTH_STATUS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT,
  SIGN_IN_REQUEST,
} from '../../constants/actionTypes';
import { IUser } from '../../types';

export const logOut = () => ({ type: LOG_OUT });

export const signUpHandler = (email: string, password: string) => ({
  type: SIGN_IN_REQUEST,
  body: { email, password },
});

export const changeAuthFields = ({
  email,
  password,
  repeatedPassword,
}: {
  email?: string;
  password?: string;
  repeatedPassword?: string;
}) => ({
  type: CHANGE_AUTH_FIELDS,
  email,
  password,
  repeatedPassword,
});

export const logInHandler = (email: string, password: string) => ({
  type: LOG_IN_REQUEST,
  body: { email, password },
});

export const changeAuthStatus = (status: string) => ({
  type: CHANGE_AUTH_STATUS,
  status,
});

export const getUser = () => ({ type: GET_USER_REQUEST });

export const getUserSuccess = (user: IUser) => ({
  type: GET_USER_SUCCESS,
  user,
});
