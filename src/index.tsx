import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Router config
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// https://github.com/ReactTraining/react-router/issues/4801
export const history = createHistory({basename: process.env.PUBLIC_URL});

import Counter from './reducers/counter';
import { combineReducers } from 'redux-immutable';

const routingMiddleware = routerMiddleware(history);
const RootReducer = combineReducers(
  {counter: Counter},
  applyMiddleware(routingMiddleware)
);
// End of router config


import App from './modules/app';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
