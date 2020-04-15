import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import initialState from './app/state';

import { RootPage } from './app/components';
import reducer from './app/reducers';

const middleWares = [thunk, logger]
const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleWares))
);

ReactDOM.render(
  <Provider store={store}>
    <RootPage />
  </Provider>, document.getElementById('root'));
