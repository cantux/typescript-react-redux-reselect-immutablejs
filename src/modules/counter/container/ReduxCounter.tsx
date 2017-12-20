import * as React from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { incrementCounter, decrementCounter } from '../../../actions/counter';

import { makeSelectCounterValue } from '../../../selectors';

// Types
import { CounterAction } from '../../../constants/Counter';
import { Store } from '../../../constants/Store';
import { Dispatch } from 'redux';
interface PropsFromState {
  value: number;
}
interface DispatchToPropTypes {
  increment: () => void;
  decrement: () => void;
  navigateToSimpleCounter: () => void;
}
interface ReduxCounterProps extends DispatchToPropTypes {
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
  decrement: () => dispatch(decrementCounter),
  navigateToSimpleCounter: () => dispatch(push('simpleCounter'))
});

const ReduxCounter: React.SFC<ReduxCounterProps> = (props) => {
  return (
    <p>
      <button onClick={props.navigateToSimpleCounter}>Navigate To Simple Counter</button>
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
