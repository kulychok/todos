import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContainer from '../ui/pages/Auth';
import HomeContainer from '../ui/pages/Home';

export const routes = (isAuthorized: boolean) => {
  if (isAuthorized) {
    return (
      <Switch>
        <Route exact path='/'>
          <HomeContainer />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path='/auth'>
        <AuthContainer />
      </Route>
      <Redirect to='/auth' />
    </Switch>
  );
};
