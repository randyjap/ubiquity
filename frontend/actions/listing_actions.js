import * as SessionAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTING = "RECEIVE_LISTING";


export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const fetchListing = (id) => dispatch => {
  return SessionAPIUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)));
};
