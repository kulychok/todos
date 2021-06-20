import {
  CHANGE_AUTH_STATUS,
  CHANGE_AUTH_FIELDS,
  LOG_OUT,
  GET_USER_SUCCESS,
  API_CALL_FAILURE,
} from '../../constants/actionTypes';
import { AUTH_STATUS } from '../../constants/authStatus';
import { cookieCleaner } from '../../helpers/cookieCleaner';
import { isValidEmail, isValidPassword } from '../../helpers/validators';

const initialState = {
  isAuthorized: false,
  authStatus: AUTH_STATUS.LOG_IN,
  authUser: { email: '', password: '', repeatedPassword: '' },
  user: {
    email: null,
    id: null,
  },
  emailErrorMessage: '',
  passwordErrorMessage: '',
};

export const authReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    authUser: { ...state.authUser },
    user: { ...state.user },
  };

  switch (action.type) {
    case CHANGE_AUTH_STATUS: {
      stateCopy.authStatus = action.status;
      return stateCopy;
    }
    case CHANGE_AUTH_FIELDS: {
      const { email, password, repeatedPassword } = action;

      if (!isValidEmail(email)) {
        stateCopy.emailErrorMessage = 'Wrong email';
        stateCopy.authUser = { email, password, repeatedPassword };
        return stateCopy;
      }
      stateCopy.emailErrorMessage = '';

      if (!isValidPassword(password) && password) {
        stateCopy.passwordErrorMessage = 'Wrong password';
        stateCopy.authUser = { email, password, repeatedPassword };
        return stateCopy;
      }
      stateCopy.passwordErrorMessage = '';

      if (repeatedPassword && password !== repeatedPassword) {
        stateCopy.passwordErrorMessage = 'Your passwords are different';
        stateCopy.authUser = { email, password, repeatedPassword };
        return stateCopy;
      }
      stateCopy.passwordErrorMessage = '';

      if (repeatedPassword && !isValidPassword(repeatedPassword)) {
        stateCopy.passwordErrorMessage = 'Wrong password';
        stateCopy.authUser = { email, password, repeatedPassword };
        return stateCopy;
      }
      stateCopy.passwordErrorMessage = '';

      stateCopy.authUser = { email, password, repeatedPassword };

      return stateCopy;
    }
    case LOG_OUT: {
      stateCopy = {
        isAuthorized: false,
        authStatus: AUTH_STATUS.LOG_IN,
        authUser: { email: '', password: '', repeatedPassword: '' },
        user: {
          email: null,
          id: null,
        },
        emailErrorMessage: '',
        passwordErrorMessage: '',
      };
      cookieCleaner();

      return stateCopy;
    }
    case GET_USER_SUCCESS: {
      stateCopy.user = { ...action.user };
      stateCopy.isAuthorized = !!stateCopy.user.id;
      return stateCopy;
    }
    case API_CALL_FAILURE:
      return { ...stateCopy, fetching: false, body: null, error: action.error };
  }
  return stateCopy;
};
