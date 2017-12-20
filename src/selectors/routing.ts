import { createSelector } from 'reselect';

import { Store } from '../constants/Store';

const getRoutingLocation = (state: Store) => (state.get('routing'));

export const selectRoutingLocation = createSelector(
  [getRoutingLocation],
  (bar) => (bar)
);
