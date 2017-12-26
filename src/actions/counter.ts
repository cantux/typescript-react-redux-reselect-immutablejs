import { CounterActionType, CounterAction } from '../constants/Counter';

const counterActionCreator = (type: CounterActionType, counterId: number): CounterAction => {
  return { type: type, payload: { id: counterId } };
};

export const incrementCounterActionCreator = (counterId: number): CounterAction =>
  (counterActionCreator(CounterActionType.INC, counterId));

export const decrementCounterActionCreator = (counterId: number): CounterAction =>
  (counterActionCreator(CounterActionType.DEC, counterId));
