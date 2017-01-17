import { RECEIVE_SEARCH_LISTINGS, RECEIVE_FILTERS, RECEIVE_BOUNDS }
  from '../actions/search_actions';
import merge from 'lodash/merge';

let _defaultState = null;

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_LISTINGS:
      return action.searchListings;
    default:
      return state;
  }
};

export default searchReducer;
