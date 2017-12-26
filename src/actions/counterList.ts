import { CounterListActionType, CounterListAction } from '../constants/CounterList';

export const addCounter: () => CounterListAction = () => ( { type: CounterListActionType.ADD_COUNTER } );

export const counterListRemoveActionCreator =
  (type: CounterListActionType, payload: number): CounterListAction => {
    return { type: type, payload: payload };
  };

export const removeCounterById = (id: number) => (
  counterListRemoveActionCreator(CounterListActionType.REMOVE_COUNTER, id)
);
