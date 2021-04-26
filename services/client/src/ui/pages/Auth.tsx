import { connect } from 'react-redux';
import * as React from 'react';
import { memo, useCallback, useState } from 'react';
import { AUTH_STATUS } from '../../constants/authStatus';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import { RootState } from '../../types/ReduxTypes';
import {
  signUpHandler,
  changeAuthFields,
  logInHandler,
} from '../../app/auth/actionCreators';
import { IAuthUser } from '../../types';

interface IAuthProps {
  authUser: { email: string; password: string; repeatedPassword?: string };
  changeAuthFields({ email, password, repeatedPassword }: IAuthUser): void;
  signUpHandler(email: string, password: string): void;
  logInHandler(email: string, password: string): void;
}

const Auth = (props: IAuthProps) => {
  const { authUser, changeAuthFields, signUpHandler, logInHandler } = props;
  const [authStatus, setAuthStatus] = useState(AUTH_STATUS.LOG_IN);

  const signUp = {
    onSubmit: useCallback(() => {
      authUser.password === authUser.repeatedPassword &&
        signUpHandler(authUser.email, authUser.password);
    }, [authUser]),

    onChange: useCallback(
      (user: IAuthUser) => changeAuthFields({ ...authUser, ...user }),
      [authUser]
    ),
  };

  const logIn = {
    onSubmit: useCallback(() => {
      logInHandler(authUser.email, authUser.password);
    }, [authUser]),

    onChange: useCallback(
      (user: IAuthUser) => changeAuthFields({ ...authUser, ...user }),
      [authUser]
    ),
  };

  return (
    <div className='auth-panel'>
      <div
        className={`auth-panel-button ${
          authStatus === AUTH_STATUS.LOG_IN ? 'current-status' : ''
        }`}
        onClick={() => setAuthStatus(AUTH_STATUS.LOG_IN)}
      >
        Log in
      </div>
      <div
        className={`auth-panel-button ${
          authStatus === AUTH_STATUS.SIGN_UP ? 'current-status' : ''
        }`}
        onClick={() => setAuthStatus(AUTH_STATUS.SIGN_UP)}
      >
        Sign up
      </div>
      {authStatus === AUTH_STATUS.LOG_IN && (
        <LogIn onSubmit={logIn.onSubmit} onChange={logIn.onChange} />
      )}
      {authStatus === AUTH_STATUS.SIGN_UP && (
        <SignUp onSubmit={signUp.onSubmit} onChange={signUp.onChange} />
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  authUser: state.auth.authUser,
});

const mapDispatchToProps = { signUpHandler, changeAuthFields, logInHandler };

export default connect(mapStateToProps, mapDispatchToProps)(memo(Auth));
