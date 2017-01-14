export const fetchSearchListings = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data
  })
);

export const fetchAllFilterOptions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/options'
  })
);
