import * as React from 'react';

import { connect } from 'react-redux';

import { RouteProps } from 'react-router-dom';

import { incrementCounterActionCreator, decrementCounterActionCreator } from '../../../actions/counter';

import { makeSelectCounter } from '../../../selectors';

import { CounterAction } from '../../../constants/Counter';
import { Store } from '../../../constants/RootStore';
import { Dispatch } from 'redux';

// Types
interface PropsFromState {
  value: number;
}
interface DispatchToPropTypes {
  increment: (id: number) => void;
  decrement: (id: number) => void;
}
interface ReduxCounterProps extends DispatchToPropTypes, PropsFromState, RouteProps {
  removeCounter?: (id: number) => void;
  id: number;
  value: number;
}
// End of Types

const mapStateToProps = (state: Store, props: ReduxCounterProps) => {
  const selectCounter = makeSelectCounter();
  return selectCounter(state, props);
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>, getState?: any) => {
  return {
    increment: (id: number) => dispatch(incrementCounterActionCreator(id)),
    decrement: (id: number) => dispatch(decrementCounterActionCreator(id))
  };
};

const ReduxCounter: React.SFC<ReduxCounterProps> = (props) => {
  const incrementHandler = () => props.increment(props.id);
  const decrementHandler = () => props.decrement(props.id);
  const removeCounterHandler = () => {
    if (props.removeCounter) {
      props.removeCounter(props.id);
    }
  };
  return (
    <p>
      Clicked: {props.value} times
      {' '}
      <button onClick={incrementHandler}>
        +
      </button>
      {' '}
      <button onClick={decrementHandler}>
        -
      </button>
      {' '}
      <button onClick={removeCounterHandler}>
        x
      </button>
    </p>
  );
};

export default connect<PropsFromState, DispatchToPropTypes>(mapStateToProps, mapDispatchToProps)(ReduxCounter);
