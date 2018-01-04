import { Map } from 'immutable';

import { CounterListStore, routerReducer } from './reducers';

interface RootStore {
  counterList: typeof CounterListStore;
  routing: typeof routerReducer;
}

export interface Store extends Map<string, typeof CounterListStore | typeof routerReducer > {
  get<K extends keyof RootStore>(name: K): RootStore[K];
}
