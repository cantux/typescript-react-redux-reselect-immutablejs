import { createSelector } from 'reselect';

import { Store } from '../constants/Store';

const getCounter = (state: Store) => (state.get('counter').get('value'));

const selectCounter = createSelector(
  [getCounter],
  (bar) => bar
);

export default selectCounter;
