json.extract! @rental,
              :end_date,
              :id,
              :start_date,
              :total
json.set! :lessor,
          @rental.lessor.username
