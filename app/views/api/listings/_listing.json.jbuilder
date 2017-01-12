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
