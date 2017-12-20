import { createSelector } from 'reselect';

import { Store } from '../constants/Store';

const getCounter = (state: Store) => (state.get('counter'));

const selectCounter = createSelector(
  [getCounter],
  (bar) => bar
);

// https://github.com/reactjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
const makeSelectCounter = () => (selectCounter);

const selectCounterValue  = createSelector(
  [selectCounter],
  (counter) => counter.get('value')
);

const makeSelectCounterValue = () => (selectCounterValue);

export {
  makeSelectCounterValue,
  makeSelectCounter
};
