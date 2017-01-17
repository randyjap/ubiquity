import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_SEARCH_LISTINGS = "RECEIVE_SEARCH_LISTINGS";
export const RECEIVE_FILTERS = "RECEIVE_FILTERS";

export const receiveListings = searchListings => ({
  type: RECEIVE_SEARCH_LISTINGS,
  searchListings
});

export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
});

export const fetchSearchListings = (filters) => dispatch => {
  return ListingAPIUtil.fetchSearchListings(filters)
    .then(listings => dispatch(receiveListings(listings)));
};

export const fetchAllFilterOptions = () => dispatch => {
  return ListingAPIUtil.fetchAllFilterOptions()
    .then(filters => dispatch(receiveFilters(filters)));
};

window.fetchSearchListings = fetchSearchListings;
