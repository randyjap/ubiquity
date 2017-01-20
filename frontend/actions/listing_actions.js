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
    .then(() => dispatch(clearSessionErrors()))
    .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const createListing = listing => dispatch => {
  return ListingAPIUtil.createListing(listing)
    .then((newListing) => {
      dispatch(clearSessionErrors());
      return newListing;
    })
    .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};
