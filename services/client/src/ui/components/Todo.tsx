import * as React from 'react';
import { memo, useCallback, useState } from 'react';

interface ITodoProps {
  id: number;
  title: string;
  status: string;
  onClick(id: number): void;
  onChange(id: number, title?: string): void;
}

const Todo = (props: ITodoProps) => {
  const { id, title, status, onClick, onChange } = props;
  const [stateTitle, setTitle] = useState(title);
  const [delClassName, setDelClassName] = useState('hidden');
  const [isEdit, setIsEdit] = useState(false);

  const onClickToggleHandler = useCallback(() => onChange(id), []);
  const onClickDeleteHandler = useCallback(() => onClick(id), []);

  const onChangeTitle = useCallback((event) => setTitle(event.target.value), [
    stateTitle,
  ]);

  const onKeyPressHandler = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onChange(id, stateTitle);
        setIsEdit(!isEdit);
      }
    },
    [stateTitle]
  );

  return (
    <li
      className='todos-item'
      onMouseOver={() => {
        setDelClassName('');
      }}
      onMouseOut={() => {
        setDelClassName('hidden');
      }}
    >
      <div
        className={`status ${status.toLowerCase()}`}
        onClick={onClickToggleHandler}
      ></div>
      {!isEdit && (
        <div
          className={`todo-title ${'completedClass'}`}
          spellCheck={false}
          onDoubleClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {title}
        </div>
      )}
      {isEdit && (
        <input
          className={`todo-title editing`}
          spellCheck={false}
          autoFocus
          value={stateTitle}
          onChange={onChangeTitle}
          onKeyPress={onKeyPressHandler}
        ></input>
      )}

      <div
        className={`delete-item ${delClassName}`}
        onClick={onClickDeleteHandler}
      >
        ×
      </div>
    </li>
  );
};

export default memo(Todo);
