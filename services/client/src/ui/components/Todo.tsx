import * as React from 'react';
import { memo, useCallback, useState, ChangeEvent } from 'react';

interface ITodoProps {
  id: number;
  title: string;
  status: string;
  changeTodoTitle(id: number, title: string): void;
  deleteTodo(id: number): void;
  editTodo(id: number, title?: string): void;
}

const Todo = (props: ITodoProps) => {
  const { id, title, status, deleteTodo, editTodo } = props;

  const [stateTitle, setTitle] = useState('');

  const onClickToggleHandler = useCallback(() => editTodo(id), [status]);
  const onClickDeleteHandler = useCallback(() => deleteTodo(id), [status]);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.textContent);
    },
    []
  );

  const onKeyPressHandler = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        editTodo(id, stateTitle);
        (event.target as HTMLTextAreaElement).blur();
      }
    },
    [stateTitle]
  );

  return (
    <li className='todos-item'>
      <div
        className={`status ${status.toLowerCase()}`}
        onClick={onClickToggleHandler}
      ></div>
      <div
        className='todo-title'
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        onInput={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      >
        {title}
      </div>

      <div className='delete-item' onClick={onClickDeleteHandler}></div>
    </li>
  );
};

export default memo(Todo);
