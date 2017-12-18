import { fromJS } from 'immutable';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';

const initialState = fromJS({
  location: null
});

export default (state = initialState, action: LocationChangeAction) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', action.payload);
  }

  return state;
};
