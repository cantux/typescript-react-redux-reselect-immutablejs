import { createSelector } from 'reselect';

import { Store } from '../constants/Store';
import {CounterListStore} from '../constants/CounterList';

const getCounterListFromStore = (state: Store) => (state.get('counterList'));
const counterListSelector = createSelector(
  [getCounterListFromStore],
  (counterList => (counterList)
);

const getCounterId = (state: Store, props: any) => props.id;

const makeSelectCounterFromList = (state: Store, props: any) => createSelector(
  [counterListSelector, getCounterId(state, props)],
  (counterList: any, counterId: any) => counterList.get(counterId)
)

const selectCounterValue = (state: Store, props: any) => createSelector(
  [makeSelectCounterFromList(state, props)],
  (counter) => counter.get('value')
);
const makeSelectCounterValue = () => (selectCounterValue);

export {
  makeSelectCounterValue
};
