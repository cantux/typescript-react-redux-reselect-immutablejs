import { createSelector } from 'reselect';

import { Store } from '../constants/RootStore';

import { selectCounterFromRoot } from './counterList';

const selectCounter = (state: Store, props: any) => createSelector(
  [selectCounterFromRoot(state, props)],
  (counter) => {
    return { value: counter.get('value'), id: counter.get('id') };
  }
);
const makeSelectCounter = () => (selectCounter);

export {
  makeSelectCounter
};
