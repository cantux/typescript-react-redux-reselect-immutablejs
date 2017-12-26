import * as React from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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
  navigateToSimpleCounter: () => void;
}
interface CounterListProps extends DispatchToPropTypes, PropsFromState {}
// End of Types

const mapStateToProps = (state: Store, props: CounterListProps) => {
  return {
    list: counterListSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterListAction>, getState?: any) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: (id: number) => dispatch(removeCounterById(id)),
  navigateToSimpleCounter: () => dispatch(push('simpleCounter'))
});

const CounterList: React.SFC<CounterListProps> = (props) => {
  const counterList = props.list.map( (val: CounterStore, key) => {
    console.log('val in list: ', val);
    return <CounterComponent key={key} removeCounter={props.removeCounter} id={val.id}/>;
  });
  return (
    <div>
      <button onClick={props.navigateToSimpleCounter}>Navigate To Simple Counter</button>
      <p>
        <button onClick={props.addCounter}>
          Add new Counter
        </button>
      </p>
      <div>{counterList}</div>
    </div>
  );
};

export default connect<PropsFromState, DispatchToPropTypes>(mapStateToProps, mapDispatchToProps)(CounterList);
