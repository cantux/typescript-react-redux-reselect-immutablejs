import { createSelector } from 'reselect';

import { selectCounterFromRoot } from '../../counterList/selectors/counterList';

const selectCounter = createSelector(
  [selectCounterFromRoot],
  (counter) => (counter ? { value: counter.get('value'), id: counter.get('id')} : { value: 0, id: -1 })
);

const makeSelectCounter = () => (selectCounter);

export {
  selectCounter,
  makeSelectCounter
};
