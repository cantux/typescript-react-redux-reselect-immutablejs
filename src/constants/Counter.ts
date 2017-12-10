import { Action } from 'redux';
import { Record } from 'immutable';

export enum CounterActionType {
  'INCREMENT',
  'DECREMENT'
}

export interface CounterAction extends Action {
  type: CounterActionType | null;
}

export interface Counter {
  value: number;
}

const CounterRecord = Record({value: 0});

export class CounterStore extends CounterRecord implements Counter {
  value: number;
  constructor(props: Counter = {value: 0}) {
    super(props);
  }

  increment(): CounterStore {
    return this.update('value', value => (value + 1)) as this;
  }

  decrement(): CounterStore {
    return this.update('value', value => (value - 1)) as this;
  }

  get<T extends keyof Counter>(value: T): Counter[T] {
    return super.get(value);
  }
}
