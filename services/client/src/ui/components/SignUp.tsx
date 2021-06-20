import { connect } from 'react-redux';
import * as React from 'react';
import { useCallback, ChangeEvent } from 'react';
import { changeAuthFields, signUpHandler } from '../../app/auth/actionCreators';
import { AppDispatch, IAuthUser, RootState } from '../../types';
import { memo } from 'react';

interface ISignUpProps {
  authUser: { email: string; password: string; repeatedPassword?: string };
  emailErrorMessage: string;
  passwordErrorMessage: string;
  onSubmit(): void;
  onChange({}: IAuthUser): void;
}

const SignUp = (props: ISignUpProps) => {
  const {
    authUser,
    onSubmit,
    onChange,
    emailErrorMessage,
    passwordErrorMessage,
  } = props;

  const changeEmailHandler = useCallback(
    (event) => onChange({ email: event.target.value }),
    [authUser.password, authUser.repeatedPassword]
  );

  const changePasswordHandler = useCallback(
    (event) => onChange({ password: event.target.value }),
    [authUser.email, authUser.repeatedPassword]
  );

  const changeRepeatedPasswordHandler = useCallback(
    (event) => onChange({ repeatedPassword: event.target.value }),
    [authUser.password, authUser.repeatedPassword]
  );

  const signUpSubmitHandler = useCallback(onSubmit, [authUser]);

  return (
    <div className='auth-form'>
      <input
        className='auth-input'
        type='email'
        placeholder='Email'
        value={authUser.email}
        onChange={changeEmailHandler}
      ></input>
      <div className={emailErrorMessage ? 'auth-error-message' : ' hidden'}>
        {emailErrorMessage}
      </div>
      <input
        className='auth-input'
        type='password'
        placeholder='Password'
        value={authUser.password}
        onChange={changePasswordHandler}
      ></input>
      <input
        className='auth-input'
        type='password'
        placeholder='Repeat password'
        value={authUser.repeatedPassword}
        onChange={changeRepeatedPasswordHandler}
      ></input>
      <div className={passwordErrorMessage ? 'auth-error-message' : ' hidden'}>
        {passwordErrorMessage}
      </div>
      <input
        className='submit-btn'
        type='submit'
        onClick={signUpSubmitHandler}
      ></input>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  authUser: state.auth.authUser,
  emailErrorMessage: state.auth.emailErrorMessage,
  passwordErrorMessage: state.auth.passwordErrorMessage,
});

export default connect(mapStateToProps, null)(memo(SignUp));
