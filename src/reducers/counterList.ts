import { List } from 'immutable';

import { CounterListAction, CounterListActionType } from '../actions/counterList';

import { CounterAction, CounterActionType } from '../actions/counter';
import CounterReducer, { CounterStore } from './counter';

export interface CounterList {
  list: CounterStore[];
}

export const CounterListStore = List<CounterStore>();

export default (state = CounterListStore, action: CounterListAction | CounterAction) => {
  switch (action.type) {
    case CounterListActionType.ADD_COUNTER:
    {
      return state.push(new CounterStore());
    }
    case CounterListActionType.REMOVE_COUNTER:
    {
      return state.delete(state.findIndex((item: CounterStore) => (item.get('id') === action.payload)));
    }
    case CounterActionType.DEC:
    case CounterActionType.INC:
    {
      return state.update(
        state.findIndex((item: CounterStore) => (item.get('id') === action.payload.id)),
        (item: CounterStore) => (CounterReducer(item, <CounterAction> action))
      );
    }
    default:
      return state;
  }
};
