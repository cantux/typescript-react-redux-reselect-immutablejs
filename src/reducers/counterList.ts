// Types
import { CounterListAction, CounterListActionType, CounterListStore } from '../constants/CounterList';
import { CounterActionType, CounterAction, CounterStore } from '../constants/Counter';
import CounterReducer from './counter';

// End of types

export default (state = CounterListStore, action: CounterListAction | CounterAction) => {
  // console.log('counter list reducer action: ', action);
  // console.log('counter list reducer state: ', state);
  switch (action.type) {
    case CounterListActionType.ADD_COUNTER:
    {
      return state.push(new CounterStore());
    }
    case CounterListActionType.REMOVE_COUNTER:
    {
      return state.delete(<number> (action.payload));
    }
    case CounterActionType.DEC:
    case CounterActionType.INC:
    {
      return state.set(action.payload.id,
                       (CounterReducer(state.get(action.payload.id), <CounterAction> action)));
    }
    default:
      return state;
  }
};
