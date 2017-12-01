// Types
import { CounterAction, CounterActionType, CounterStore } from '../constants/Counter';
// End of types

export default (state = new CounterStore({value: 0}), action: CounterAction): CounterStore => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
    {
      return state.update('value', (value) => (value + 1));
    }
    case CounterActionType.DECREMENT:
    {
      return state--;
    }

    default:
      return state;
  }
};
