export const fetchUserRentals = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/rentals',
    data
  })
);

export const fetchUserListings = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/listings',
    data
  })
);

export const toggleListingActivity = (id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/listings/${id}`
  })
);

export const fetchUserProfile = () => (
  $.ajax({
    method: 'GET',
    url: `/api/users`
  })
);
