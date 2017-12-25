import { createSelector } from 'reselect';

import { Store } from '../constants/Store';
import { CounterListStore } from '../constants/CounterList';

const getCounterListFromStore = (state: Store) => {
  console.log('state in get counter list from store: ', state);
  console.log('counter list is: ', state.get('counterList'));
  return state.get('counterList');
}

const counterListSelector = createSelector(
  [getCounterListFromStore],
  (counterList) => (counterList)
);

const getCounterId = (state: Store, props: any) => {
  console.log('state: ', state);
  console.log('props: ', props);
  return 0;
};

const selectCounterFromList = (state: Store, props: any) => createSelector(
  [counterListSelector, getCounterId],
  (counterList: typeof CounterListStore, counterId: number) => {
    console.log('counterList: ', counterList);
    console.log('counterId: ', counterId);
    return counterList.get(counterId);
  }
);

export {
  counterListSelector,
  selectCounterFromList
};
