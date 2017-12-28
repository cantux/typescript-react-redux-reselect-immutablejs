import { Map } from 'immutable';

import { CounterListStore } from './counterList';
import { routerReducer } from 'react-router-redux';

interface RootStore {
  counterList: typeof CounterListStore;
  routing: typeof routerReducer;
}

export interface Store extends Map<string, typeof CounterListStore | typeof routerReducer > {
  get<K extends keyof RootStore>(name: K): RootStore[K];
}
