import Counter from './counter';

import { combineReducers } from 'redux-immutable';

const RootReducer = combineReducers({counter: Counter});

export default RootReducer;
