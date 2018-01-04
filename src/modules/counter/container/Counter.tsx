import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { incrementCounterActionCreator, decrementCounterActionCreator, CounterAction } from '../actions/counter';
import { Store } from '../../../RootStore';
import { makeSelectCounter } from '../../../selectors';

// Types
interface PropsFromState {
  value: number;
}
interface DispatchToPropTypes {
  increment: (id: number) => void;
  decrement: (id: number) => void;
}
export interface CounterProps
  extends DispatchToPropTypes, PropsFromState, Partial<RouteComponentProps<{ id: number }>> {
  removeCounter?: (id: number) => void;
  id: number;
}
// End of Types

const makeMapStateToProps = () => (state: Store, props: CounterProps) => {
  const counterSelector = makeSelectCounter();
  return counterSelector(state, props);
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => {
  return {
    increment: (id: number) => dispatch(incrementCounterActionCreator(id)),
    decrement: (id: number) => dispatch(decrementCounterActionCreator(id))
  };
};

const ReduxCounter: React.SFC<CounterProps> = (props) => {
  let actionButtons;
  if (props.hasOwnProperty('id')) {
    const incrementHandler = () => props.increment(props.id);
    const decrementHandler = () => props.decrement(props.id);
    const removeCounterHandler = () => {
      if (props.removeCounter) {
        props.removeCounter(props.id);
      }
    };
    actionButtons = (
      <div>
        {' '}
        <button onClick={incrementHandler}>
          +
        </button>
        {' '}
        <button onClick={decrementHandler}>
          -
        </button>
        {' '}
        <button onClick={removeCounterHandler} disabled={!props.hasOwnProperty('removeCounter')}>
          x
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>
        Clicked: {props.value} times
      </p>
      {actionButtons}
    </div>
  );
};

export default connect<PropsFromState, DispatchToPropTypes>(makeMapStateToProps, mapDispatchToProps)(ReduxCounter);
