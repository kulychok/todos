import { connect } from 'react-redux';
import * as React from 'react';
import { changeAuthFields, signUpHandler } from '../../app/auth/actionCreators';
import { AppDispatch, RootState } from '../../types';
import { memo } from 'react';

interface ISignUpProps {
  authUser: { email: string; password: string; repeatedPassword?: string };
  emailErrorMessage: string;
  passwordErrorMessage: string;
  signUpHandler(email: string, password: string): void;
  changeAuthFields(
    email: string,
    password: string,
    repeatedPassword?: string
  ): void;
}

const SignUp = (props: ISignUpProps) => {
  const {
    authUser,
    signUpHandler,
    changeAuthFields,
    emailErrorMessage,
    passwordErrorMessage,
  } = props;

  return (
    <div className='auth-form'>
      <input
        className='auth-input'
        type='email'
        placeholder='Email'
        value={authUser.email}
        onChange={(event) =>
          changeAuthFields(
            event.target.value,
            authUser.password,
            authUser.repeatedPassword
          )
        }
      ></input>
      <div className={emailErrorMessage ? 'auth-error-message' : ' hidden'}>
        {emailErrorMessage}
      </div>
      <input
        className='auth-input'
        type='password'
        placeholder='Password'
        value={authUser.password}
        onChange={(event) =>
          changeAuthFields(
            authUser.email,
            event.target.value,
            authUser.repeatedPassword
          )
        }
      ></input>
      <input
        className='auth-input'
        type='password'
        placeholder='Repeat password'
        value={authUser.repeatedPassword}
        onChange={(event) =>
          changeAuthFields(
            authUser.email,
            authUser.password,
            event.target.value
          )
        }
      ></input>
      <div className={passwordErrorMessage ? 'auth-error-message' : ' hidden'}>
        {passwordErrorMessage}
      </div>
      <input
        className='submit-btn'
        type='submit'
        onClick={() => {
          if (authUser.password === authUser.repeatedPassword) {
            signUpHandler(authUser.email, authUser.password);
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
  signUpHandler: (email: string, password: string) =>
    dispatch(signUpHandler(email, password)),
  changeAuthFields: (
    email: string,
    password: string,
    repeatedPassword?: string
  ) => dispatch(changeAuthFields(email, password, repeatedPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignUp));
