import * as React from 'react';

import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../../actions/counter';

import { makeSelectCounterValue } from '../../../selectors';

// Types
import { CounterAction } from '../../../constants/Counter';
import { Store } from '../../../constants/Store';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
interface PropsFromState {
  value: number;
}
interface DispatchToPropTypes {
  increment: () => void;
  decrement: () => void;
}
interface NavParams {}
interface ReduxCounterProps extends RouteComponentProps<NavParams>, DispatchToPropTypes {
  value: number;
}
// End of Types

const mapStateToProps = (state: Store) => {
  return {
    value: makeSelectCounterValue()(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>, getState?: any) => ({
  increment: () => dispatch(incrementCounter),
  decrement: () => dispatch(decrementCounter)
});

const ReduxCounter: React.SFC<ReduxCounterProps> = (props) => {
  return (
    <p>
      Clicked: {props.value} times
      {' '}
      <button onClick={props.increment}>
        +
      </button>
      {' '}
      <button onClick={props.decrement}>
        -
      </button>
    </p>
  );
};

export default connect<PropsFromState, DispatchToPropTypes>(mapStateToProps, mapDispatchToProps)(ReduxCounter);
