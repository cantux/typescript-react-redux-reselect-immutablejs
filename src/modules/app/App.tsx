import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { ErrorBoundary, Error } from '../common';
import { Home } from '../home/Home';
import { SimpleCounter } from '../simpleCounter/SimpleCounter';
import CounterList from '../counterList/container/CounterList';

// import DevTools from '../DevTools/devTools';

const logo = require('../../assets/images/logo.svg');

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Typescript React Redux ImmutableJs Reselect</h2>
        </div>

        <ErrorBoundary>
            <div className="App-intro">
              <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/simpleCounter" component={SimpleCounter}/>
                <Route exact={true} path="/counterList" component={CounterList}/>
                <Route render={() => (<Error message="Invalid Link!!"/>)}/>
              </Switch>
            </div>
        </ErrorBoundary>
        {/*<DevTools/>*/}
      </div>
    );
  }
}
