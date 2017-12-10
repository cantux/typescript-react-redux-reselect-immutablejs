import { CounterActionType, CounterAction } from '../constants/Counter';

export const counterActionCreator = (type: CounterActionType): CounterAction => {
  return { type: type };
};

export const incrementCounter: CounterAction = counterActionCreator(CounterActionType.INCREMENT);
export const decrementCounter: CounterAction = counterActionCreator(CounterActionType.DECREMENT);
