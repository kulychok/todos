import { connect } from 'react-redux';
import * as React from 'react';
import { useCallback, useState, memo, useMemo } from 'react';
import STATUS from '../../constants/todoStatus';
import { changeNewTodoTitle } from '../../app/todo/actionCreators';
import { RootState } from '../../types';

interface ICreateTodoFieldProps {
  newTodoTitle: string;
  toggleAllStatus: string;
  countAll: number;
  onKeyPress(): void;
  toggleAll(): void;
  onChange(newTodoTitle: string): void;
  onKeyPress(): void;
}

const CreateTodoField = (props: ICreateTodoFieldProps) => {
  const {
    newTodoTitle,
    toggleAllStatus,
    countAll,
    onKeyPress,
    onChange,
    toggleAll,
  } = props;

  const className = useMemo(() => (countAll > 0 ? 'with-todo-list' : ''), [
    countAll,
  ]);

  const changeHandler = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [newTodoTitle]
  );

  const keyPressHandler = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onKeyPress();
      }
    },
    [newTodoTitle]
  );

  return (
    <div className='create-todo-panel'>
      <div
        className={`toggle-all ${STATUS[toggleAllStatus].label}`}
        onClick={toggleAll}
      >
        ❯
      </div>
      <input
        className={`input-field ${className}`}
        placeholder='What needs to be done?'
        type='text'
        value={newTodoTitle}
        autoFocus
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      ></input>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  newTodoTitle: state.todo.newTodoTitle,
  countAll: state.todo.count.all,
  toggleAllStatus: state.todo.toggleAllStatus,
});

const mapDispatchToProps = { onChange: changeNewTodoTitle };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CreateTodoField));
