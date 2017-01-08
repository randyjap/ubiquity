import { RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

let _defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    case LOGOUT_CURRENT_USER:
      return _defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
