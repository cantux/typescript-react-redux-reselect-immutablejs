import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom';

import { incrementCounterActionCreator, decrementCounterActionCreator, CounterAction } from '../../../actions/counter';
import { selectCounter } from '../../../selectors';
import { Store } from '../../../reducers/RootStore';

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
  // const selectCounter = makeSelectCounter();
  return selectCounter(state, props);
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => {
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