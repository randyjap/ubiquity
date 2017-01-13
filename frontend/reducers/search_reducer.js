import { RECEIVE_SEARCH_LISTINGS }
  from '../actions/search_actions';
import merge from 'lodash/merge';

let _defaultState = {
  searchListings: null,
  searchFilters: null
};

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_LISTINGS:
      return merge({}, state, { searchListings: action.searchListings });
    default:
      return state;
  }
};

export default searchReducer;
