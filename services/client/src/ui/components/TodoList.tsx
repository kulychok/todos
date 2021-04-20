import * as React from 'react';
import { memo } from 'react';
import { ReactElement } from 'react';
import { ITodo } from '../../types';
import Todo from './Todo';
import { connect } from 'react-redux';
import { getTodoListFromObj } from '../../app/todo/selectors';
import {
  changeTodoTitle,
  deleteTodo,
  editTodo,
} from '../../app/todo/actionCreators';
import { AppDispatch, RootState } from '../../types';

interface ITodoListProps {
  todoList: ITodo[];
  changeTodoTitle(id: number, title: string): void;
  deleteTodo(id: number): void;
  editTodo(id: number, title?: string): void;
}

const TodoList = (props: ITodoListProps) => {
  const { todoList, changeTodoTitle, deleteTodo, editTodo } = props;

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
            changeTodoTitle={changeTodoTitle}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  todoList: getTodoListFromObj(state),
});

const mapDispatchToProps = (dispatch: AppDispatch, ownProps) => {
  const { currentPage, filterType } = ownProps;
  return {
    deleteTodo: (id: number) =>
      dispatch(deleteTodo(id, currentPage, filterType)),
    editTodo: (id: number, title?: string) =>
      dispatch(editTodo(id, currentPage, filterType, title)),
    changeTodoTitle: (id: number, todoTitle: string) =>
      dispatch(changeTodoTitle(id, todoTitle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(TodoList));
