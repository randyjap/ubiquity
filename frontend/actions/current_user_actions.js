import * as UserListingAPIUtil from '../util/user_listing_api_util';
import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";
export const RECEIVE_USER_RENTALS = "RECEIVE_USER_RENTALS";
export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";

export const receiveUserRentals = rentals => ({
  type: RECEIVE_USER_RENTALS,
  rentals
});

export const receiveUserListings = listings => ({
  type: RECEIVE_USER_LISTINGS,
  listings
});

export const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const fetchUserRentals = () => dispatch => {
  return UserListingAPIUtil.fetchUserRentals()
    .then(rentals => dispatch(receiveUserRentals(rentals)));
};

export const fetchUserListings = () => dispatch => {
  return UserListingAPIUtil.fetchUserListings()
    .then(listings => dispatch(receiveUserListings(listings)));
};

export const toggleListingActivity = id => dispatch => {
  return UserListingAPIUtil.toggleListingActivity(id)
    .then(listings => dispatch(receiveUserListings(listings)));
};

export const submitReview = review => dispatch => {
  return ReviewAPIUtil.submitReview(review)
    .then(() => dispatch(fetchUserRentals()));
};

export const fetchUserProfile = () => dispatch => {
  return UserListingAPIUtil.fetchUserProfile()
    .then((profile) => dispatch(receiveUserProfile(profile)));
};
