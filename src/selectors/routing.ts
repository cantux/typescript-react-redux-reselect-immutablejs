import { createSelector } from 'reselect';

import { Store } from '../constants/RootStore';

const getRoutingLocation = (state: Store) => (state.get('routing'));

export const selectRoutingLocation = createSelector(
  [getRoutingLocation],
  (bar) => (bar)
);
