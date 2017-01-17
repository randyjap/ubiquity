import { RECEIVE_OPTIONS }
  from '../actions/option_actions';
import merge from 'lodash/merge';

let _defaultState = {};

const optionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_OPTIONS:
      return merge({}, state, action.options);
    default:
      return state;
  }
};

export default optionReducer;
