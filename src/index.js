import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './variable.css';
import { Provider } from 'react-redux';
import AppRouter from './components/Router';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
