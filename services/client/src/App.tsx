import * as React from 'react';
import { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './router';
import { connect } from 'react-redux';
import Header from './ui/components/Header';

import { getTodoListRequest } from './app/todo/actionCreators';
import { AppDispatch, RootState } from './types/ReduxTypes';
import { getUser } from './app/auth/actionCreators';

interface IAppProps {
  isAuthorized: boolean;
  getUser(): void;
  getTodoList(page: number): void;
}

const App = (props: IAppProps) => {
  const { isAuthorized, getUser, getTodoList } = props;

  document.cookie && getUser();

  getTodoList(0);

  const router = routes(isAuthorized);

  return (
    <Router>
      <Header />
      <div className='app'>{router}</div>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getUser: () => dispatch(getUser()),
  getTodoList: (page: number) => dispatch(getTodoListRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
