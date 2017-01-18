export const submitReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: review
  })
);
