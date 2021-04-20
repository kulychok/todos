import * as React from 'react';
import { memo } from 'react';
import { ICount } from '../../types';

const Counter = (props: { count: ICount }) => {
  const { all, active, completed } = props.count;

  return (
    <div className='todos-counter'>
      <div className='allTodos'>{`You have ${all} todos`}</div>
      <div className='doneTodos'>{`${completed} are active`}</div>
      <div className='notDoneTodos'>{`${active} are completed`}</div>
    </div>
  );
};

export default memo(Counter);
