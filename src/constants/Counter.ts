import { Action } from 'redux';
import { Record } from 'immutable';

export enum CounterActionType {
  INC = 'INCREMENT',
  DEC = 'DECREMENT'
}

export interface CounterAction extends Action {
  type: CounterActionType;
  payload: {id: number};
}

export interface Counter {
  value: number;
  id: number;
}

let counterId = 0;

const CounterRecord = Record({value: 0, id: counterId});

export class CounterStore extends CounterRecord implements Counter {
  value: number;
  id: number;
  constructor(props: Counter = {value: 0, id: counterId++}) {
    console.log('counterID: ', counterId)
    super(props);
  }

  increment(): CounterStore {
    return this.update('value', value => (value + 1)) as this;
  }

  decrement(): CounterStore {
    return this.update('value', value => (value - 1)) as this;
  }

  get<T extends keyof Counter>(memberProp: T): Counter[T] {
    return super.get(memberProp);
  }
}
