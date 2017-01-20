json.extract! listing,
              :id,
              :brand,
              :category,
              :day_rate,
              :detail_desc,
              :lat,
              :id,
              :listing_title,
              :lng,
              :location,
              :rating_average,
              :replacement_value,
              :review_count,
              :serial

json.set! :lessor,
          listing.lessor.username
json.set! :brand,
          listing.brand.name
json.set! :category,
          listing.category.name

json.photos listing.photos do |photo|
  json.image_url photo.image_url
  json.photo_id photo.id
end

json.reviews listing.reviews do |review|
  json.lessee review.reviewer.username
  json.date time_ago_in_words(review.created_at)
  json.rating review.review
  json.review_text review.review_text
  json.id review.id
end.sort_by! { |k, _| k["created_at"] }.reverse!

json.rentals listing.rentals do |rental|
  json.start_date rental.start_date
  json.end_date rental.end_date
  json.id rental.id
end.sort_by! { |k, _| k["start_date"] }
