import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import { Iterable } from 'immutable';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import RoutingReducer from './reducers/router';
import CounterListReducer from './reducers/counterList';

import App from './modules/app';

// import { persistState } from 'redux-devtools';
// import DevTools from './modules/DevTools/devTools';
// function getDebugSessionKey() {
//   // You can write custom logic here!
//   // By default we try to read the key from ?debug_session=<key> in the address bar
//   const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
//   return (matches && matches.length > 0) ? matches[1] : null;
// }

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const RootReducer = combineReducers(
  { counterList: CounterListReducer,
  routing: RoutingReducer }
);

// https://github.com/ReactTraining/react-router/issues/4801
export const history = createHistory({basename: process.env.PUBLIC_URL});

const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({
    stateTransformer: (state: typeof RootReducer) => {
      let newState = {};

      for (var i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      }

      return newState;
    }
  });
  middlewares.push(logger);
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
    // DevTools.instrument(),
    // persistState(getDebugSessionKey() || '')
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
