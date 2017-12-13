import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ErrorBoundary, Error } from '../common';
import { Home } from '../home/Home';
import { SimpleCounter } from '../simpleCounter/SimpleCounter';
import ReduxCounter from '../counter/container/ReduxCounter';

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
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App-intro">
              <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/simpleCounter" component={SimpleCounter}/>
                <Route exact={true} path="/reduxCounter" component={ReduxCounter}/>
                <Route render={() => (<Error message="Invalid Link!!"/>)}/>
              </Switch>
            </div>
          </Router>
        </ErrorBoundary>
      </div>
    );
  }
}
