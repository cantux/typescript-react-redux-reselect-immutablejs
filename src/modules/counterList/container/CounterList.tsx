import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Store } from '../../../RootStore';

import { removeCounterById, addCounter, CounterListAction } from '../actions/counterList';
import { CounterListStore } from '../reducers/counterList';
import { CounterStore } from '../../counter/reducers/counter';
import { selectCounterListFromRoot } from '../selectors/counterList';

import CounterComponent from '../../counter';

// Types
interface PropsFromState {
  list: typeof CounterListStore;
}
interface DispatchToPropTypes {
  addCounter: () => void;
  removeCounter: (id: number) => void;
  navigateToSimpleCounter: () => void;
}
export interface CounterListProps extends DispatchToPropTypes, PropsFromState {}
// End of Types

const mapStateToProps = (state: Store, props: CounterListProps) => {
  return {
    list: selectCounterListFromRoot(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterListAction>) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: (id: number) => (dispatch(removeCounterById(id))),
  navigateToSimpleCounter: () => dispatch(push('simpleCounter'))
});

const CounterList: React.SFC<CounterListProps> = (props) => {
  const counterList = props.list.map( (val: CounterStore, key) => {
    return <CounterComponent key={val.id} removeCounter={props.removeCounter} id={val.id}/>;
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
