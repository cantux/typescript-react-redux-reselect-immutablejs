// Types
import { CounterAction, CounterActionType, CounterStore } from '../constants/Counter';
// End of types

export default (state = new CounterStore(), action: CounterAction): CounterStore => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
    {
      return state.increment();
    }
    case CounterActionType.DECREMENT:
    {
      return state.decrement();
    }
    default:
      return state;
  }
};
