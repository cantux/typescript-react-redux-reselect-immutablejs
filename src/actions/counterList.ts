import { CounterListActionType, CounterListAddAction, CounterListRemoveAction} from '../constants/CounterList';
import { CounterStore } from '../constants/Counter';

export const counterListAddActionCreator =
  (type: CounterListActionType, payload: CounterStore): CounterListAddAction => {
    return { type: type, payload: payload };
};

export const counterListRemoveActionCreator =
  (type: CounterListActionType, payload: number): CounterListRemoveAction => {
    return { type: type, payload: payload };
};

export const addCounter: CounterListAddAction = counterListAddActionCreator(
  CounterListActionType.ADD_COUNTER,
  new CounterStore()
);

export const removeCounterById = (id: number) => (
  counterListRemoveActionCreator(CounterListActionType.REMOVE_COUNTER, id)
);
