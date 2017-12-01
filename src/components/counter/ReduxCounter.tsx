import * as React from 'react';

import { connect } from 'react-redux';

import { increment, decrement } from '../../actions/counter';
import { CounterStore } from '../../constants/Counter';
// Types
import { CounterAction } from '../../constants/Counter';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
interface PropsFromState {
  value: number;
}
interface DispatchFromProps {
  increment: (dispatch: Dispatch<CounterAction>, getState?: any) => void;
  decrement: (dispatch: Dispatch<CounterAction>, getState?: any) => void;
}
interface NavParams {}
interface ReduxCounterProps extends RouteComponentProps<NavParams> {
  value: number;
  actions: DispatchFromProps;
}
// End of Types

const mapStateToProps = (state: CounterStore) => ({
  value: state.get('value')
});

class ReduxCounter extends React.Component<ReduxCounterProps> {
  constructor(props: ReduxCounterProps) {
    super(props);
  }

  render() {
    return (
      <p>
        Clicked: {this.props.value} times
        {' '}
        {/*<button onClick={this.props.actions.decrement}>*/}
          {/*+*/}
        {/*</button>*/}
        {/*{' '}*/}
        {/*<button onClick={this.props.actions.decrement}>*/}
          {/*-*/}
        {/*</button>*/}
      </p>
    );
  }
}

export default connect<PropsFromState, DispatchFromProps, {}>(mapStateToProps, {increment: increment, decrement: decrement})(ReduxCounter);
