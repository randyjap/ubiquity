import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/error_actions';

import merge from 'lodash/merge';

let _defaultState = {
  all: []
};

const errorReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, _defaultState, { all: action.errors });
    case CLEAR_SESSION_ERRORS:
      return merge({}, _defaultState, { all: [] });
    default:
      return state;
  }
};

export default errorReducer;
