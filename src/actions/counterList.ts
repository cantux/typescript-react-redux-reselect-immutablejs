import { CounterListActionType, CounterListAddAction, CounterListRemoveAction} from '../constants/CounterList';
import { Counter } from '../constants/Counter';

export const counterListAddActionCreator = (type: CounterListActionType, payload: Counter): CounterListAddAction => {
  return { type: type, payload: payload };
};

export const counterListRemoveActionCreator = (type: CounterListActionType, payload: number): CounterListRemoveAction => {
  return { type: type, payload: payload };
};

let counterCount = 0;
export const addCounter: CounterListAddAction = counterListAddActionCreator(
  CounterListActionType.ADD_COUNTER,
  {value: counterCount++}
);

export const removeCounterById = (id: number) => (
  counterListRemoveActionCreator(CounterListActionType.REMOVE_COUNTER, id)
);
