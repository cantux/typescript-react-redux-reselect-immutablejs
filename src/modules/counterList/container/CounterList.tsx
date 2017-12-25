import * as React from 'react';

import { connect } from 'react-redux';

import { removeCounterById, addCounter } from '../../../actions/counterList';

import { counterListSelector } from '../../../selectors';

import CounterComponent from '../../counter/container/ReduxCounter';

// Types
import { CounterListAction, CounterListStore, CounterStore } from '../../../constants/CounterList';
import { Store } from '../../../constants/Store';
import { Dispatch } from 'redux';
interface PropsFromState {
  list: typeof CounterListStore;
}
interface DispatchToPropTypes {
  addCounter: () => void;
  removeCounter: (id: number) => void;
}
interface CounterListProps extends DispatchToPropTypes, PropsFromState {}
// End of Types

const mapStateToProps = (state: Store, props: CounterListProps) => {
  return {
    list: counterListSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterListAction>, getState?: any) => ({
  addCounter: () => dispatch(addCounter),
  removeCounter: (id: number) => dispatch(removeCounterById(id)),
});

const CounterList: React.SFC<CounterListProps> = (props) => {
  props.list.map( (val: CounterStore, key) => {
    console.log('val: ', val)
    console.log('key: ', key)
    return <CounterComponent key={key}/>;
  });
  return (
    <p>
      <button onClick={props.addCounter}>
        Add new Counter
      </button>
    </p>
  );
};

export default connect<PropsFromState, DispatchToPropTypes>(mapStateToProps, mapDispatchToProps)(CounterList);
