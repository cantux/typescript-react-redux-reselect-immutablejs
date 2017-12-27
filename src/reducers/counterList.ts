// Types
import { CounterListAction, CounterListActionType, CounterListStore } from '../constants/CounterList';
import { CounterActionType, CounterAction, CounterStore } from '../constants/Counter';
import CounterReducer from './counter';
// End of types

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
