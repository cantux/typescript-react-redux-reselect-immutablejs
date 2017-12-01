import { combineReducers } from 'redux';

import { CounterStore } from '../constants/Counter';

import Counter from './counter';

export default combineReducers<CounterStore>({counter: Counter});
