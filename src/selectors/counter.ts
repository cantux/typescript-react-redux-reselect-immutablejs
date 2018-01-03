import { createSelector } from 'reselect';

import { selectCounterFromRoot } from './counterList';

const makeSelectCounter = () => createSelector(
  [selectCounterFromRoot],
  (counter) => (counter ? { value: counter.get('value'), id: counter.get('id')} : {value: 0})
);

export {
  makeSelectCounter
};
