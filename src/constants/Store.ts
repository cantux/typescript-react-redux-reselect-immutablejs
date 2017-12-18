import { Map } from 'immutable';

import { CounterStore } from './Counter';
import { routerReducer } from 'react-router-redux';

interface RootStore {
  counter: CounterStore;
  routing: typeof routerReducer;
}

export interface Store extends Map<string, CounterStore | typeof routerReducer> {
  get<K extends keyof RootStore>(name: K): RootStore[K];
}
