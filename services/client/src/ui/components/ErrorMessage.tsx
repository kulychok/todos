import * as React from 'react';

interface IErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: IErrorMessageProps) => (
  <div className='invalid-input-message'>{errorMessage}</div>
);

export default React.memo(ErrorMessage);
