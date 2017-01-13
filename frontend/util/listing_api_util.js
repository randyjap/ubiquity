export const fetchSearchListings = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data
  })
);

export const fetchBrandOptions = (selection) => (
  $.ajax({
    method: 'GET',
    url: '/api/options',
    selection
  })
);
