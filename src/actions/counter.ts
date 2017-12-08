import { CounterActionType, CounterAction } from '../constants/Counter';

export const counterActionCreator = (type: CounterActionType): CounterAction => {
  return { type: type };
};

export const incrementCounter: CounterAction = counterActionCreator(CounterActionType.INCREMENT);
export const decrementCounter: CounterAction = counterActionCreator(CounterActionType.DECREMENT);

//
// export const increment = () => (dispatch: Dispatch<CounterAction>, getState?: any ) => {
//   dispatch(incrementCounter);
// };
//
// const decrementCounter: CounterAction = { type: CounterActionType.DECREMENT };
//
// export const decrement = () => (dispatch: Dispatch<CounterAction>, getState?: any) => {
//   dispatch(decrementCounter);
// };
