import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers';

import App from './components/app';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
