import * as React from 'react';

import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../actions/counter';
import { Store } from '../../constants/Store';
// Types
import { CounterAction, CounterStore } from '../../constants/Counter';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
interface PropsFromState {
  value: number;
}
interface DispatchFromProps {
  increment: () => void;
  decrement: () => void;
}
interface NavParams {}
interface ReduxCounterProps extends RouteComponentProps<NavParams>, DispatchFromProps {
  value: number;
}
// End of Types
const mapStateToProps = (state: Store) => {
  console.log('map state to props ran: ', state);
  return {
    value: (state as CounterStore).get('value')
  };
}

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>, getState?: any) => ({
  increment: () => dispatch(incrementCounter),
  decrement: () => dispatch(decrementCounter)
});

const ReduxCounter: React.SFC<ReduxCounterProps> = (props) => {
  console.log('props is: ', props);
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
}

export default connect<PropsFromState, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(ReduxCounter);
