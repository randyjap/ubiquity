import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_SEARCH_LISTINGS = "RECEIVE_SEARCH_LISTINGS";

export const receiveListings = searchListings => ({
  type: RECEIVE_SEARCH_LISTINGS,
  searchListings
});

export const fetchSearchListings = (filters) => dispatch => {
  return ListingAPIUtil.fetchSearchListings(filters)
    .then(listings => dispatch(receiveListings(listings)));
};
