export const fetchAllFilterOptions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/options'
  })
);
