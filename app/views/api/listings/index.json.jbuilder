@listings.each do |listing|
  json.set! listing.id do
    json.array! listing.rentals do |rental|
      json.extract! rental,
                    :end_date,
                    :id,
                    :start_date,
                    :total
      json.set! :lessee,
                rental.lessee.username
    end.sort_by! { |k, _| k["start_date"] }
  end
end
