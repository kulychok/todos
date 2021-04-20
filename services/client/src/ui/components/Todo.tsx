import * as React from 'react';
import { memo } from 'react';

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

  return (
    <li className='todos-item'>
      <div
        className={`status ${status.toLowerCase()}`}
        onClick={() => editTodo(id)}
      ></div>
      <div
        className='todo-title'
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        onKeyPress={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter') {
            editTodo(id, (event.target as HTMLTextAreaElement).textContent);
            (event.target as HTMLTextAreaElement).blur();
          }
        }}
      >
        {title}
      </div>

      <div className='delete-item' onClick={() => deleteTodo(id)}></div>
    </li>
  );
};

export default memo(Todo);
