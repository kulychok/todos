import * as React from 'react';
import { memo } from 'react';

interface IUserBlockProps {
  user: { email: string };
  onClick(): void;
}

const UserBlock = (props: IUserBlockProps) => {
  const { user, onClick } = props;

  return (
    <div className='user-block'>
      <div>{user.email}</div>
      <div className='log-out-button' onClick={onClick}>
        Log out
      </div>
    </div>
  );
};

export default memo(UserBlock);
