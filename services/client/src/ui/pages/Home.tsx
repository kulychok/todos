import { connect } from 'react-redux';
import * as React from 'react';
import { memo, useCallback, useCallback, useCallback } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import CreateTodoField from '../components/CreateTodoField';
import TodoList from '../components/TodoList';
import TodoListFooter from '../components/TodoListFooter';
import FILTERS from '../../constants/filters';
import Paginator from '../components/Paginator';
import UserBlock from '../components/UserBlock';
import {
  addTodo,
  changeCurrentPage,
  changeFilterType,
  changeToggleAllStatus,
  deleteCompleted,
  deleteTodo,
  getTodoListRequest,
  patchToActive,
  patchToCompleted,
  editTodo,
} from '../../app/todo/actionCreators';
import { getLastPage } from '../../app/todo/selectors';
import { AppDispatch, RootState } from '../../types/ReduxTypes';
import { logOut } from '../../app/auth/actionCreators';
import ICount from '../../types/ICount';
import STATUS from '../../constants/todoStatus';

interface IHomeProps {
  filterType: string;
  currentPage: number;
  errorMessage: string;
  toggleAllStatus: string;
  lastPage: number;
  limit: number;
  count: ICount;
  userName: string;
  newTodoTitle: string;
  logOut(): void;
  getTodoList(page: number, filterType?: string): void;
  changeFilterType(filterType: string): void;
  changeCurrentPage(page: number): void;
  deleteCompleted(page: number, filterType: string): void;
  addTodo(
    title: string,
    status: string,
    page: number,
    filterType: string
  ): void;
  changeToggleAllStatus(): void;
  patchToCompleted(page: number, filterType: string): void;
  patchToActive(page: number, filterType: string): void;
  deleteTodo(id: number, currentPage: number, filterType: string): void;
  editTodo(
    id: number,
    currentPage: number,
    filterType: string,
    title?: string
  ): void;
}

const Home = (props: IHomeProps) => {
  const {
    filterType,
    currentPage,
    errorMessage,
    toggleAllStatus,
    limit,
    count,
    userName,
    logOut,
    getTodoList,
    changeFilterType,
    changeCurrentPage,
    lastPage,
    deleteCompleted,
    newTodoTitle,
    addTodo,
    changeToggleAllStatus,
    patchToCompleted,
    patchToActive,
    deleteTodo,
    editTodo,
  } = props;

  const pageClickHandler = useCallback(
    (page: number) => {
      changeCurrentPage(page);
      getTodoList(page, filterType);
    },
    [filterType, currentPage]
  );

  const todoListFooter = {
    onClickFilterBtn: useCallback(
      (filterType: string) => {
        changeFilterType(filterType);
        changeCurrentPage(0);
        getTodoList(0, filterType);
      },
      [filterType]
    ),

    onClickDeleteBtn: useCallback(() => {
      changeFilterType(FILTERS.ALL);
      changeCurrentPage(0);
      deleteCompleted(currentPage, filterType);
      changeToggleAllStatus();
    }, [currentPage, filterType]),
  };

  const createTodoField = {
    onKeyPress: useCallback(() => {
      addTodo(newTodoTitle, STATUS.ACTIVE.value, lastPage, filterType);
      changeCurrentPage(lastPage);
    }, [newTodoTitle, lastPage, filterType]),

    onClick: useCallback(() => {
      toggleAllStatus === STATUS.ACTIVE.value
        ? patchToCompleted(0, filterType)
        : patchToActive(0, filterType);
      changeToggleAllStatus();
    }, [filterType, toggleAllStatus]),
  };

  const todoList = {
    onClick: useCallback(
      (id: number) => deleteTodo(id, currentPage, filterType),
      [currentPage, filterType]
    ),

    onChange: useCallback(
      (id: number, title?: string) =>
        editTodo(id, currentPage, filterType, title),
      [currentPage, filterType]
    ),
  };

  return (
    <div className='home'>
      <ErrorMessage errorMessage={errorMessage} />
      <div className='main-panel'>
        <CreateTodoField
          onKeyPress={createTodoField.onKeyPress}
          toggleAll={createTodoField.onClick}
        />
        {count.all > 0 && (
          <TodoList
            currentPage={currentPage}
            filterType={filterType}
            onClick={todoList.onClick}
            onChange={todoList.onChange}
          />
        )}
        {count.all > 0 && (
          <TodoListFooter
            count={count}
            filters={FILTERS}
            filterType={filterType}
            onClickFilterBtn={todoListFooter.onClickFilterBtn}
            onClickDeleteBtn={todoListFooter.onClickDeleteBtn}
          />
        )}
      </div>

      <Paginator
        count={count[filterType]}
        pageLimit={limit}
        currentPage={currentPage}
        onClick={pageClickHandler}
      />
      <UserBlock user={{ email: userName }} onClick={logOut} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  filterType: state.todo.filterType,
  currentPage: state.todo.currentPage,
  errorMessage: state.todo.errorMessage,
  count: state.todo.count,
  limit: state.todo.limit,
  countPage: state.todo.countPage,
  userName: state.auth.user.email,
  lastPage: getLastPage(state),
  toggleAllStatus: state.todo.toggleAllStatus,
  newTodoTitle: state.todo.newTodoTitle,
});

const mapDispatchToProps = {
  addTodo,
  changeToggleAllStatus,
  patchToActive,
  patchToCompleted,
  logOut,
  changeFilterType,
  changeCurrentPage,
  getTodoList: getTodoListRequest,
  deleteCompleted,
  deleteTodo,
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
