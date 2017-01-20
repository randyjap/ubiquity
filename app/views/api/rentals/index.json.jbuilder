json.set! :current_user do
  json.array! @rentals do |rental|
    json.set! :lessor, rental.lessor.username
    json.set! :id, rental.id
    json.set! :listing_id, rental.listing.id
    json.set! :start_date, rental.start_date
    json.set! :end_date, rental.end_date
    json.set! :total, rental.total
    if rental.review
      json.set! :rating, rental.review.review
      json.set! :review, rental.review.review_text
    end
  end
end
