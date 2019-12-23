import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './components/App/AppContainer';

import { store } from './store';
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
