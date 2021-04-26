import { connect } from 'react-redux';
import * as React from 'react';
import { useCallback, useMemo } from 'react';
import { memo } from 'react';
import { IAuthUser, RootState } from '../../types';

interface ILogInProps {
  authUser: { email: string; password: string };
  emailErrorMessage: string;
  passwordErrorMessage: string;
  onSubmit(): void;
  onChange({ email, password, repeatedPassword }: IAuthUser): void;
}

const LogIn = (props: ILogInProps) => {
  const {
    authUser,
    onSubmit,
    onChange,
    emailErrorMessage,
    passwordErrorMessage,
  } = props;

  const isValid = useMemo(() => !passwordErrorMessage && !emailErrorMessage, [
    passwordErrorMessage,
    emailErrorMessage,
  ]);

  const changeEmailHandler = useCallback(
    (event) => {
      onChange({ email: event.target.value });
    },
    [authUser.password]
  );

  const changePasswordHandler = useCallback(
    (event) => {
      onChange({ password: event.target.value });
    },
    [authUser.email]
  );

  const submitHandler = useCallback(() => {
    if (isValid) {
      onSubmit();
    }
  }, [authUser]);

  return (
    <div className='auth-form'>
      <input
        className={
          emailErrorMessage ? 'auth-input invalid-input' : 'auth-input'
        }
        type='email'
        value={authUser.email}
        placeholder='Email'
        onChange={changeEmailHandler}
      ></input>

      <div className={emailErrorMessage ? 'auth-error-message' : ' hidden'}>
        {emailErrorMessage}
      </div>
      <input
        className='auth-input'
        type='password'
        value={authUser.password}
        placeholder='Password'
        onChange={changePasswordHandler}
      ></input>

      {passwordErrorMessage && (
        <div className='auth-error-message'>{passwordErrorMessage}</div>
      )}

      <input className='submit-btn' type='submit' onClick={submitHandler} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  authUser: state.auth.authUser,
  emailErrorMessage: state.auth.emailErrorMessage,
  passwordErrorMessage: state.auth.passwordErrorMessage,
});

export default connect(mapStateToProps, null)(memo(LogIn));
