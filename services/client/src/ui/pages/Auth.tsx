import { connect } from 'react-redux';
import * as React from 'react';
import { memo } from 'react';
import { AUTH_STATUS } from '../../constants/authStatus';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import { changeAuthStatus } from '../../app/auth/actionCreators';
import { AppDispatch, RootState } from '../../types/ReduxTypes';

interface IAuthProps {
  authStatus: string;
  changeAuthStatus(val: string): void;
}

const Auth = (props: IAuthProps) => {
  const { authStatus, changeAuthStatus } = props;

  return (
    <div className='auth-panel'>
      <div
        className={`auth-panel-button ${
          authStatus === AUTH_STATUS.LOG_IN ? 'current-status' : ''
        }`}
        onClick={() => changeAuthStatus(AUTH_STATUS.LOG_IN)}
      >
        Log in
      </div>
      <div
        className={`auth-panel-button ${
          authStatus === AUTH_STATUS.SIGN_UP ? 'current-status' : ''
        }`}
        onClick={() => changeAuthStatus(AUTH_STATUS.SIGN_UP)}
      >
        Sign up
      </div>
      {authStatus === AUTH_STATUS.LOG_IN && <LogIn />}
      {authStatus === AUTH_STATUS.SIGN_UP && <SignUp />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  authStatus: state.auth.authStatus,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeAuthStatus: (authStatus: string) =>
    dispatch(changeAuthStatus(authStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Auth));
