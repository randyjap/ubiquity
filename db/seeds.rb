User.create(username: "WelcomeGuest", password: "password")

50.times do
  User.create(username: Faker::Name.name, password: "password")
end

["Photography", "DSLR", "Video", "Accessories", "Location", "Lighting", "Sound", "Lenses", "Filters"].each do |category|
  Category.create({name: category})
end

["Canon", "Nikon", "Fuji", "Sony", "Pentax", "Leica", "Minolta", "Panasonic"].each do |brand|
  Brand.create({name: brand})
end

brand = Brand.first
category = Category.first

50.times do
  Listing.create!({
    lessor: User.find(rand(1..User.count)),
    listing_title: Faker::Company.buzzword,
    detail_desc: Faker::Company.catch_phrase,
    location: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    day_rate: rand(5..500),
    replacement_value: rand(500..5000),
    serial: Faker::Crypto.md5,
    brand: Brand.find(rand(1..Brand.count)),
    category: Category.find(rand(1..Category.count)),
    active: true
  })
end

50.times do
  starting_date = Faker::Date.forward(23)
  ending_date = starting_date + rand(1..14)

  Rental.create({
    listing: Listing.find(rand(1..Listing.count)),
    lessee: User.find(rand(1..User.count)),
    start_date: starting_date,
    end_date: ending_date
  })
end

200.times do
  thumbnail_url = "https://upload.wikimedia.org/wikipedia/commons/d/da/Pictograms-nps-misc-camera-2.svg"
  Photo.create({
    listing: Listing.find(rand(1..Listing.count)),
    image_url: thumbnail_url
  })
end

200.times do
  Review.create({
    reviewer: User.find(rand(1..User.count)),
    rental: Rental.find(rand(1..Rental.count)),
    review: rand(1..5)
  })
end
