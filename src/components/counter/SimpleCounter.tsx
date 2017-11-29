import * as React from 'react';

enum ActionTypes {
  'INCREMENT',
  'DECREMENT'
}
interface Action {
  type: ActionTypes | null;
}
const counter = (state: SimpleCounterStates = { value: 0 }, action: Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { value: state.value + 1 };
    case ActionTypes.DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

interface SimpleCounterProps {}
interface SimpleCounterStates {
  value: number;
}

export class SimpleCounter extends React.Component<SimpleCounterProps, SimpleCounterStates> {
  constructor (props: SimpleCounterProps) {
    super(props);
    this.state = counter(undefined, {type: null});
  }

  dispatch(action: Action) {
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: ActionTypes.INCREMENT });
  }

  decrement = () => {
    this.dispatch({ type: ActionTypes.DECREMENT });
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
