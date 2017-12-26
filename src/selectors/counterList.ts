import { createSelector } from 'reselect';

import { Store } from '../constants/Store';
import { CounterListStore } from '../constants/CounterList';

const getCounterListFromStore = (state: Store) => (state.get('counterList'));

const counterListSelector = createSelector(
  [getCounterListFromStore],
  (counterList) => (counterList)
);

const getCounterId = (state: Store, props: any) => {
  console.log('props in getCounterId selector: ', props);
  return props.id;
};

const selectCounterFromList = (state: Store, props: any) => createSelector(
  [counterListSelector, getCounterId],
  (counterList: typeof CounterListStore, counterId: number) => {
    console.log('select counter from list: whole counter list: ', counterList);
    console.log('select counter from list: counter Id: ', counterId);
    console.log('select counter from list: counter itself: ', counterList.get(counterId));
    return counterList.find((item) => {
      if (item) {
        return item.get('id') === counterId;
      }
      return false;
    });
  }
);

export {
  counterListSelector,
  selectCounterFromList
};
