import * as React from 'react';
import { memo } from 'react';
import { ITodo } from '../../types';
import Todo from './Todo';
import { connect } from 'react-redux';
import { getTodoListFromObj } from '../../app/todo/selectors';
import { RootState } from '../../types';

interface ITodoListProps {
  todoList: ITodo[];
  onClick(id: number): void;
  onChange(id: number, title?: string): void;
}

const TodoList = (props: ITodoListProps) => {
  const { todoList, onClick, onChange } = props;

  return (
    <ul className='todo-list'>
      {todoList.map((todo: ITodo) => {
        const { id, status, title } = todo;
        return (
          <Todo
            key={id}
            id={id}
            status={status}
            title={title}
            onClick={onClick}
            onChange={onChange}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  todoList: getTodoListFromObj(state),
});

export default connect(mapStateToProps, null)(memo(TodoList));
