import * as React from 'react';
import { memo } from 'react';

interface IUserBlockProps {
  user: { email: string };
  logOut(): void;
}

const UserBlock = (props: IUserBlockProps) => {
  const { user, logOut } = props;

  return (
    <div className='user-block'>
      <div>{user.email}</div>
      <div className='log-out-button' onClick={logOut}>
        Log out
      </div>
    </div>
  );
};

export default memo(UserBlock);
