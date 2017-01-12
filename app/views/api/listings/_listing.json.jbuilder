json.extract! listing,
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

# $.ajax({
#   method: 'GET',
#   url: '/api/listings/4'
# }).then(listing => {console.log(listing)})
