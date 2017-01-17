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
