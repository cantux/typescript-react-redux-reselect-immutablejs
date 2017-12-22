// Types
import { CounterListAction, CounterListActionType, CounterListStore } from '../constants/CounterList';
import { CounterStore } from '../constants/Counter';
// End of types

export default (state = CounterListStore, action: CounterListAction) => {
  switch (action.type) {
    case CounterListActionType.ADD_COUNTER:
    {
      return state.push(<CounterStore> action.payload);
    }
    case CounterListActionType.REMOVE_COUNTER:
    {
      return state.delete(<number> (action.payload));
    }
    default:
      return state;
  }
};
