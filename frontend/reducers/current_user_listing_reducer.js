import { RECEIVE_USER_LISTINGS } from '../actions/current_user_actions';
import merge from 'lodash/merge';

let _defaultState = null;

const currentUserListingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_LISTINGS:
      return merge({}, action.listings);
    default:
      return state;
  }
};

export default currentUserListingReducer;
