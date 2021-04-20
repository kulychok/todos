import { connect } from 'react-redux';
import * as React from 'react';
import { changeAuthFields, logInHandler } from '../../app/auth/actionCreators';
import { memo } from 'react';
import { AppDispatch, RootState } from '../../types';

interface ILogInProps {
  authUser: { email: string; password: string };
  emailErrorMessage: string;
  passwordErrorMessage: string;
  logInHandler(email: string, password: string): void;
  changeAuthFields(email: string, password: string): void;
}

const LogIn = (props: ILogInProps) => {
  const {
    authUser,
    logInHandler,
    changeAuthFields,
    emailErrorMessage,
    passwordErrorMessage,
  } = props;
  // const status = React.useMemo(() => (error ? 'error' : 'valid'), [error]);

  return (
    <div className='auth-form'>
      <input
        className={
          emailErrorMessage ? 'auth-input invalid-input' : 'auth-input'
        }
        type='email'
        value={authUser.email}
        placeholder='Email'
        onChange={(event) =>
          changeAuthFields(event.target.value, authUser.password)
        }
      ></input>

      <div className={emailErrorMessage ? 'auth-error-message' : ' hidden'}>
        {emailErrorMessage}
      </div>
      <input
        className='auth-input'
        type='password'
        value={authUser.password}
        placeholder='Password'
        onChange={(event) =>
          changeAuthFields(authUser.email, event.target.value)
        }
      ></input>

      {passwordErrorMessage && (
        <div className='auth-error-message'>{passwordErrorMessage}</div>
      )}

      <input
        className='submit-btn'
        type='submit'
        onClick={() => {
          if (!passwordErrorMessage && !emailErrorMessage) {
            logInHandler(authUser.email, authUser.password);
          }
        }}
      ></input>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  authUser: state.auth.authUser,
  emailErrorMessage: state.auth.emailErrorMessage,
  passwordErrorMessage: state.auth.passwordErrorMessage,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  logInHandler: (email: string, password: string): void => {
    dispatch(logInHandler(email, password));
  },
  changeAuthFields: (email: string, password: string): void => {
    dispatch(changeAuthFields(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(LogIn));
