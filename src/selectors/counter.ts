import { createSelector } from 'reselect';

import { selectCounterFromRoot } from './counterList';

const selectCounter = createSelector(
  [selectCounterFromRoot],
  (counter) => ({ value: counter.get('value'), id: counter.get('id') })
);

export {
  selectCounter
};
