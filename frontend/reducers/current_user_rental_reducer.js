import { RECEIVE_USER_RENTALS } from '../actions/current_user_actions';
import merge from 'lodash/merge';

let _defaultState = {};

const currentUserRentalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_RENTALS:
      return merge({}, action.rentals);
    default:
      return state;
  }
};

export default currentUserRentalReducer;
