import { RECEIVE_LISTING } from '../actions/listing_actions';

import merge from 'lodash/merge';

let _defaultState = null;

const listingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      return action.listing;
    default:
      return state;
  }
};

export default listingReducer;
