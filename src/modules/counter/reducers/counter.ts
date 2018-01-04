import { Record } from 'immutable';

import { CounterAction, CounterActionType } from '../actions/counter';

export default (state: CounterStore, action: CounterAction): CounterStore => {
  switch (action.type) {
    case CounterActionType.INC:
    {
      // return Object.assign({}, state, { value: state.value + 1});
      return state.increment();
    }
    case CounterActionType.DEC:
    {
      // return Object.assign({}, state, { value: state.value - 1});
      return state.decrement();
    }
    default:
      return state;
  }
};

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
