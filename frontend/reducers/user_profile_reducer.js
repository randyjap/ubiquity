import { RECEIVE_USER_PROFILE } from '../actions/current_user_actions';
import merge from 'lodash/merge';

let _defaultState = {};

const userProfileReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return merge({}, action.profile);
    default:
      return state;
  }
};

export default userProfileReducer;
