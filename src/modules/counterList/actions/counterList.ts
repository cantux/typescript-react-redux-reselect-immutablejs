import { Action } from 'redux';

export enum CounterListActionType {
  ADD_COUNTER = 'ADDCOUNTER',
  REMOVE_COUNTER = 'REMOVECOUNTER'
}

export interface CounterListAction extends Action {
  type: CounterListActionType | null;
  payload?: number;
}

export const addCounter: () => CounterListAction = () => ( { type: CounterListActionType.ADD_COUNTER } );

export const counterListRemoveActionCreator =
  (type: CounterListActionType, payload: number): CounterListAction => {
    return { type: type, payload: payload };
  };

export const removeCounterById = (id: number) => (
  counterListRemoveActionCreator(CounterListActionType.REMOVE_COUNTER, id)
);
