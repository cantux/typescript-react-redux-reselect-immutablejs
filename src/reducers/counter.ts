// Types
import { CounterAction, CounterActionType, CounterStore } from '../constants/Counter';
// End of types

export default (state: CounterStore, action: CounterAction): CounterStore => {
  switch (action.type) {
    case CounterActionType.INC:
    {
      return state.increment();
    }
    case CounterActionType.DEC:
    {
      return state.decrement();
    }
    default:
      return state;
  }
};
