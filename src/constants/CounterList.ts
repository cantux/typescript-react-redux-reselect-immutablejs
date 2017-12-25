import { Action } from 'redux';
import { List } from 'immutable';

import { CounterStore } from './Counter';

export enum CounterListActionType {
  'ADD_COUNTER',
  'REMOVE_COUNTER'
}

export interface CounterListAddAction extends Action {
  type: CounterListActionType | null;
  payload: CounterStore;
}

export interface CounterListRemoveAction extends Action {
  type: CounterListActionType | null;
  payload: number;
}

export type CounterListAction = CounterListRemoveAction | CounterListAddAction;

export interface CounterList {
  list: CounterStore[];
}

const CounterListStore = List<CounterStore>([new CounterStore()]);

export {
  CounterStore,
  CounterListStore
};
