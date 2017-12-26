import { Action } from 'redux';
import { List } from 'immutable';

import { CounterStore } from './Counter';

export enum CounterListActionType {
  ADD_COUNTER = 'ADDCOUNTER',
  REMOVE_COUNTER = 'REMOVECOUNTER'
}

export interface CounterListAction extends Action {
  type: CounterListActionType | null;
  payload?: number;
}

export interface CounterList {
  list: CounterStore[];
}

const CounterListStore = List<CounterStore>();

export {
  CounterStore,
  CounterListStore
};
