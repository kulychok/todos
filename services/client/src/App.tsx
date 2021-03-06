import * as React from 'react';
import { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import { connect } from 'react-redux';
import Header from './ui/components/Header';
import { getTodoListRequest } from './app/todo/actionCreators';
import { getUser } from './app/auth/actionCreators';
import { RootState } from './types/ReduxTypes';

interface IAppProps {
  isAuthorized: boolean;
  getUser(): void;
  getTodoList(page?: number, filterType?: string): void;
}

const App = (props: IAppProps) => {
  const { isAuthorized, getUser, getTodoList } = props;

  document.cookie && getUser();
  isAuthorized && getTodoList();

  return (
    <Router>
      <Header />
      <div className='app'>
        <AppRouter isAuthorized={isAuthorized} />
      </div>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = {
  getUser,
  getTodoList: getTodoListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
