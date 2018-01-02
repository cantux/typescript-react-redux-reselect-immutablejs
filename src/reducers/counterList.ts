import { List } from 'immutable';

import { CounterListAction, CounterListActionType } from '../actions/counterList';

import { CounterAction, CounterActionType } from '../actions/counter';
import CounterReducer, { CounterStore } from './counter';

export const CounterListStore = List<CounterStore>();

export default (state = CounterListStore, action: CounterListAction | CounterAction) => {
  switch (action.type) {
    case CounterListActionType.ADD_COUNTER:
    {
      // return [...state, new CounterStore()]
      return state.push(new CounterStore());
    }
    case CounterListActionType.REMOVE_COUNTER:
    {
      // return state.filter(item => item.id !== action.payload)
      return state.delete(state.findIndex((item: CounterStore) => (item.get('id') === action.payload)));
    }
    case CounterActionType.DEC:
    case CounterActionType.INC:
    {
      // const changeIndex = state.findIndex(item => item.id === action.payload.id)
      // const firstPart = state.slice(0, changeIndex - 1)
      // const lastPart = state.slice(changeIndex + 1, state.length)
      // return [ ...firstPart, CounterReducer(state[changeIndex], <CounterAction> action), ...lastPart]
      return state.update(
        state.findIndex((item: CounterStore) => (item.get('id') === action.payload.id)),
        (item: CounterStore) => (CounterReducer(item, <CounterAction> action))
      );
    }
    default:
      return state;
  }
};
