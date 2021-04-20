import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './ui/styles/normalize.css';
import './ui/styles/styles.css';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export {};
