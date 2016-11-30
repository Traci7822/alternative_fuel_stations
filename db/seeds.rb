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
  rating1 = Rating.find_or_create_by(station_id: 1, stars: 5)
  rating2 = Rating.find_or_create_by(station_id: 2, stars: 2)
  comment1 = Comment.create!(name: 'Traci', email: 'Tracir@gmail.com', content: "Wooo sweet comment brah", station_id: 222)
  comment2 = Comment.create!(name: 'Bob', email: 'bob@gmail.com', content: "i'm gross", station_id: 147)
end
