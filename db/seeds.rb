User.create(username: "WelcomeGuest", password: "password")

50.times do |i|
  User.create(username: Faker::Name.name, password: "password")
end
