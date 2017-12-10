import { Map } from 'immutable';

import { CounterStore } from './Counter';

interface RootStore {
  counter: CounterStore;
}

export interface Store extends Map<string, CounterStore> {
  get<K extends keyof RootStore>(name: K): RootStore[K];
}
