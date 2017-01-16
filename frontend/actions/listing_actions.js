import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTING = "RECEIVE_LISTING";
import { receiveSessionErrors, clearSessionErrors } from './error_actions';

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const fetchListing = (id) => dispatch => {
  return ListingAPIUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)));
};

export const bookListing = (rental) => dispatch => {
  return ListingAPIUtil.bookListing(rental)
    .then(user => dispatch(clearSessionErrors()))
    .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};
