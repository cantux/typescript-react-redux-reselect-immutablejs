import { createSelector } from 'reselect';

import { Store } from '../constants/Store';

import { selectCounterFromList } from './counterList';

const selectCounter = (state: Store, props: any) => createSelector(
  [selectCounterFromList(state, props)],
  (counter) => {
    console.log('select counter: ', counter)
    return { value: counter.get('value'), id: counter.get('id') }
  }
);
const makeSelectCounter = () => (selectCounter);

export {
  makeSelectCounter
};
