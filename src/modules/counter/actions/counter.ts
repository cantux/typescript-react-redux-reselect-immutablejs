import { Action } from 'redux';

export enum CounterActionType {
  INC = 'INCREMENT',
  DEC = 'DECREMENT'
}

export interface CounterAction extends Action {
  type: CounterActionType;
  payload: {id: number};
}

const counterActionCreator = (type: CounterActionType, counterId: number): CounterAction => {
  return { type: type, payload: { id: counterId } };
};

export const incrementCounterActionCreator = (counterId: number): CounterAction =>
  (counterActionCreator(CounterActionType.INC, counterId));

export const decrementCounterActionCreator = (counterId: number): CounterAction =>
  (counterActionCreator(CounterActionType.DEC, counterId));
