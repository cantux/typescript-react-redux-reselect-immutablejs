import { createSelector } from 'reselect';

import { Store } from '../constants/RootStore';
import { CounterListStore } from '../constants/CounterList';

const getCounterListFromStore = (state: Store) => (state.get('counterList'));

const selectCounterListFromRoot = createSelector(
  [getCounterListFromStore],
  (counterList) => (counterList)
);

const getCounterIdFromProps = (state: Store | typeof CounterListStore, props: { id: number }) => {
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

const selectCounterFromRoot = createSelector(
  [selectCounterListFromRoot, getCounterIdFromProps],
  (counterList: typeof CounterListStore, counterId: number) => (findCounter(counterList, counterId))
);

const getCounterList = (state: typeof CounterListStore) => (state);

const selectCounterFromList = createSelector(
  [getCounterList, getCounterIdFromProps],
  (counterList: typeof CounterListStore, counterId: number) => (findCounter(counterList, counterId))
);

export {
  selectCounterListFromRoot,
  selectCounterFromList,
  selectCounterFromRoot
};
