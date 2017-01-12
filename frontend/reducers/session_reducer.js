import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER }
  from '../actions/session_actions';
import merge from 'lodash/merge';

let _defaultState = {
  currentUser: null
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser
      };
    case LOGOUT_CURRENT_USER:
      return _defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
