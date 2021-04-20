import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from '../app/auth/reducers';
import { todoReducer } from '../app/todo/reducers';
import { rootSaga } from './rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const reducers = combineReducers({
    auth: authReducer,
    todo: todoReducer,
  });

  const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };
