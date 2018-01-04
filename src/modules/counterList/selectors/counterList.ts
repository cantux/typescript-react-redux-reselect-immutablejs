import { createSelector } from 'reselect';

import { Store } from '../../../RootStore';
import { CounterListStore } from '../reducers/counterList';

import { CounterProps } from '../../counter/container/Counter';

const getCounterListFromStore = (state: Store) => (state.get('counterList'));

const selectCounterListFromRoot = createSelector(
  [getCounterListFromStore],
  (counterList) => (counterList)
);

const makeGetCounterIdFromProps = () => (getCounterIdFromProps);

const getCounterIdFromProps = (state: Store | typeof CounterListStore, props: CounterProps) =>
  (props.hasOwnProperty('id') ?
    props.id : Number(props.match!.params.id));

const findCounter = (counterList: typeof CounterListStore, counterId: number) => (
  counterList.find((item) => {
      if (item) {
        return item.get('id') === counterId;
      }
      return false;
    }
  )
);

const selectCounterFromRoot = createSelector(
  [selectCounterListFromRoot, makeGetCounterIdFromProps()],
  (counterList: typeof CounterListStore, counterId: number) => (findCounter(counterList, counterId))
);

const getCounterList = (state: typeof CounterListStore) => (state);

const selectCounterFromList = createSelector(
  [getCounterList, makeGetCounterIdFromProps()],
  (counterList: typeof CounterListStore, counterId: number) => (findCounter(counterList, counterId))
);

export {
  selectCounterListFromRoot,
  selectCounterFromList,
  selectCounterFromRoot
};
