import * as UserListingAPIUtil from '../util/user_listing_api_util';

export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS";

export const receiveUserListings = listings => ({
  type: RECEIVE_USER_LISTINGS,
  listings
});

export const fetchUserListings = () => dispatch => {
  return UserListingAPIUtil.fetchUserListings()
    .then(listings => dispatch(receiveUserListings(listings)));
};

export const toggleListingActivity = (id) => dispatch => {
  return UserListingAPIUtil.toggleListingActivity(id)
    .then(listings => dispatch(receiveUserListings(listings)));
};
