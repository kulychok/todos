import { connect } from 'react-redux';
import { LOG_OUT } from '../../constants/actionTypes';
import * as React from 'react';
import { memo } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import CreateTodoField from '../components/CreateTodoField';
import TodoList from '../components/TodoList';
import Filters from '../components/TodoListFooter';
import FILTERS from '../../constants/filters';
import Paginator from '../components/Paginator';
import UserBlock from '../components/UserBlock';
import { ReactElement } from 'react';
import {
  changeCurrentPage,
  changeFilterType,
  deleteCompleted,
  getTodoListRequest,
} from '../../app/todo/actionCreators';
import { getLastPage } from '../../app/todo/selectors';
import { AppDispatch, RootState } from '../../types/ReduxTypes';
import { logOut } from '../../app/auth/actionCreators';
import ICount from '../../types/ICount';

interface IHomeProps {
  filterType: string;
  currentPage: number;
  errorMessage: string;
  lastPage: number;
  limit: number;
  count: ICount;
  userName: string;
  logOut(): void;
  getTodoList(page: number, filterType?: string): void;
  changeFilterType(filterType: string): void;
  changeCurrentPage(page: number): void;
  delCompleted(page: number, filterType: string): void;
}

const Home = (props: IHomeProps) => {
  const {
    filterType,
    currentPage,
    errorMessage,
    limit,
    count,
    userName,
    logOut,
    getTodoList,
    changeFilterType,
    changeCurrentPage,
    lastPage,
    delCompleted,
  } = props;

  return (
    <div className='home'>
      <ErrorMessage errorMessage={errorMessage} />
      <div className='main-panel'>
        <CreateTodoField filterType={filterType} lastPage={lastPage} />
        {count.all > 0 && (
          <TodoList currentPage={currentPage} filterType={filterType} />
        )}
        {count.all > 0 && (
          <Filters
            count={count}
            filters={FILTERS}
            filterType={filterType}
            getTodoList={getTodoList}
            changeFilterType={changeFilterType}
            changeCurrentPage={changeCurrentPage}
            delCompleted={delCompleted}
          />
        )}
      </div>

      <Paginator
        count={count[filterType.toLowerCase()]}
        pageLimit={limit}
        filterType={filterType}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        getTodoList={getTodoList}
      />
      <UserBlock user={{ email: userName }} logOut={logOut} />
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
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeFilterType: (filterType: string) =>
    dispatch(changeFilterType(filterType)),
  changeCurrentPage: (currentPage: number) =>
    dispatch(changeCurrentPage(currentPage)),
  logOut: () => {
    dispatch(logOut());
  },
  getTodoList: (page: number, filterType?: string) =>
    dispatch(getTodoListRequest(page, filterType)),
  delCompleted: (page: number, filterType?: string) => {
    dispatch(deleteCompleted(page, filterType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
