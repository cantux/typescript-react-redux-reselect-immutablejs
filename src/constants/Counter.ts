import { Action } from 'redux';
import { Record } from 'immutable';

export enum CounterActionType {
  'INCREMENT',
  'DECREMENT'
}

export interface CounterAction extends Action {
  type: CounterActionType | null;
}

interface Counter {
  value: number;
}

const CounterRecord = Record({value: 0});

export class CounterStore extends CounterRecord implements Counter {
  value: number;
  constructor(props: Counter) {
    super(props);
  }
}
