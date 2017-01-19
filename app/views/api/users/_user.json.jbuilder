json.extract! user, :id, :username
json.set! :average_rating, user.average_listing_rating
json.set! :total_count, user.review_count_received
json.set! :five_stars, user.review_count_by_rating(5)
json.set! :four_stars, user.review_count_by_rating(4)
json.set! :three_stars, user.review_count_by_rating(3)
json.set! :two_stars, user.review_count_by_rating(2)
json.set! :one_stars, user.review_count_by_rating(1)
