import { RECEIVE_SEARCH_LISTINGS, RECEIVE_FILTERS, RECEIVE_BOUNDS }
  from '../actions/search_actions';
import merge from 'lodash/merge';

let _defaultState = {
  searchListings: null,
  searchFilters: {
    brand: null,
    category: null,
    rating: null,
    bounds: null,
    price: null
  }
};

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_LISTINGS:
      return merge({}, state, { searchListings: null }, { searchListings: action.searchListings});
    case RECEIVE_FILTERS:
      let brands;
      let categories;
      if (state.searchFilters.brand_options) {
        brands = [];
      } else {
        brands = state.searchFilters.brand_options;
      }
      if (state.searchFilters.category_options) {
        categories = [];
      } else {
        categories = state.searchFilters.category_options;
      }
      let newState = {
        searchListings: state.searchListings,
        searchFilters: {
          brand_options: state.searchFilters.brand_options,
          category_options: state.searchFilters.category_options,
          brand: brands,
          category: categories
        }
      };
      return merge(newState, { searchFilters: action.filters });
    case RECEIVE_BOUNDS:
      return merge(state, { searchFilters: { bounds: action.filters }});
    default:
      return state;
  }
};

export default searchReducer;
