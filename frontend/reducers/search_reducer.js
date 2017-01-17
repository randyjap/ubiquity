import { RECEIVE_SEARCH_LISTINGS, RECEIVE_FILTERS }
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
      let newState = {
        searchListings: state.searchListings,
        searchFilters: {
          brand_options: state.searchFilters.brand_options,
          category_options: state.searchFilters.category_options,
          brand: [],
          category: []
        }
      };
      return merge(newState, { searchFilters: action.filters });
    default:
      return state;
  }
};

export default searchReducer;

// {
//   bounds: {
//     northEast: { lat: 900, lng: 900 },
//     southWest: { lat: -900, lng: -900 }
//   },
//   brand: ["Canon", "Minolta"],
//   category: ["Photography", "Video"]
// }
