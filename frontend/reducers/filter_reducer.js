import { RECEIVE_FILTERS, RECEIVE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

let _defaultState = {
  brand: null,
  category: null,
  rating: null,
  bounds: null,
  price: null
};

const filterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let middleState;
  if (action.filters && action.filters.brand && action.filters.brand.length === 0) middleState = { brand: null };
  if (action.filters && action.filters.category && action.filters.category.length === 0) middleState = { category: null };
  switch (action.type) {
    case RECEIVE_FILTERS:
      return merge({}, state, action.filters, middleState);
    case RECEIVE_BOUNDS:
      return merge({}, state, { bounds: action.filters });
    default:
      return state;
  }
};

export default filterReducer;