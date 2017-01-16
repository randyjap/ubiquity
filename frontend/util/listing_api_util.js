export const fetchSearchListings = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data
  })
);

export const fetchListing = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  })
);

export const fetchAllFilterOptions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/options'
  })
);

export const bookListing = (data) => (
  $.ajax({
    method: 'POST',
    url: `/api/rentals`,
    data
  })
);
