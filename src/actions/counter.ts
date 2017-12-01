import { Dispatch } from 'redux';
import { CounterActionType, CounterAction } from '../constants/Counter';

const incrementCounter: CounterAction = { type: CounterActionType.INCREMENT };

export const increment = () => (dispatch: Dispatch<CounterAction>, getState?: any ) => {
  dispatch(incrementCounter);
};

const decrementCounter: CounterAction = { type: CounterActionType.DECREMENT };

export const decrement = () => (dispatch: Dispatch<CounterAction>, getState?: any) => {
  dispatch(decrementCounter);
};
