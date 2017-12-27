import { createSelector } from 'reselect';

import { Store } from '../constants/RootStore';
import { CounterListStore } from '../constants/CounterList';

const getCounterListFromStore = (state: Store) => (state.get('counterList'));

const selectCounterListFromRoot = createSelector(
  [getCounterListFromStore],
  (counterList) => (counterList)
);

const getCounterIdFromRoot = (state: Store, props: any) => {
  return props.id;
};

const findCounter = (counterList: typeof CounterListStore, counterId: number) => (
  counterList.find((item) => {
      if (item) {
        return item.get('id') === counterId;
      }
      return false;
    }
  )
);

const selectCounterFromRoot = (state: Store, props: any) => createSelector(
  [selectCounterListFromRoot, getCounterIdFromRoot],
  (counterList: typeof CounterListStore, counterId: number) => (findCounter(counterList, counterId))
);

const getCounterIdFromList = (state: typeof CounterListStore, props: any) => {
  return props.id;
};

const getCounterList = (state: typeof CounterListStore) => (state);

const selectCounterFromList = createSelector(
  [getCounterList, getCounterIdFromList],
  (counterList: typeof CounterListStore, counterId: number) => (findCounter(counterList, counterId))
);

export {
  selectCounterListFromRoot,
  selectCounterFromList,
  selectCounterFromRoot
};
