// Types
import { CounterAction, CounterActionType, CounterStore } from '../constants/Counter';
// End of types

export default (state = new CounterStore({value: 0}), action: CounterAction): CounterStore => {
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
      console.log('default state returned: ', state.toJS());
      return state;
  }
};
