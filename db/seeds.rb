# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if ENV['RAILS_ENV'] != 'production'
  station1 = Station.create!(fuel_type_code: 'BD', name: 'Fort Carson', street_address: 'Bldg 6234 Fuels Account', phone: "", hours: "", station_id: 48451, city: 'Fort Carson', state: 'CO', zip: 80913)
  station2 = Station.create!(fuel_type_code: 'BD', name: "Duggan's Petroleum", street_address: '4435 S Santa Fe Dr', phone: 303-781-0546, hours: "", station_id: 33723, city: 'Englewood', state: 'CO', zip: 80110)
  user1 = User.find_or_initialize_by(email: 'user1@user.com', username: 'user1')
  user1.password = "password"
  user1.save
  user2 = User.find_or_initialize_by(email: 'user2@user.com', username: 'user2')
  user2.password = "password"
  user2.save
  rating1 = Rating.find_or_create_by(station_id: 1, user_id: 1, stars: 5)
  rating2 = Rating.find_or_create_by(station_id: 2, user_id: 2, stars: 2)
end
