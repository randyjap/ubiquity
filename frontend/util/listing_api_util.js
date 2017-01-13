export const fetchSearchListings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/search'
  })
);
