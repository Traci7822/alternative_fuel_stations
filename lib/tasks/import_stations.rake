require 'net/http'

namespace :import do
  desc "import fuel station database"
  task :stations => :environment do
    uri = URI.parse('https://data.colorado.gov/resource/c7ve-fkni.json')
    res = Net::HTTP.get(uri)
    response = JSON.parse(res)
    response.each do |r|
      Station.create(ev_connector_types: r['ev_connector_types'], fuel_type_code: r["fuel_type_code"], name: r["station_name"], street_address: r["street_address"], phone: r["station_phone"], hours: r["access_days_time"], station_id: r["id"], city: r["city"], state: r["state"], zip: r["zip"])
    end
  end
end


# net/http or open-uri or any HTTP client in ruby to read the data from your URL
# then you want to use JSON.parse to transform the raw JSON string into a ruby object (most likely a bunch of hashes)
# then you iterate over those hashes and create the equivalent data locally

#your form is going to be bound to some object that exists within the angular controller or $state
#and you use ng-model for that binding each input to a property
#that's step one, you should be able to type text into an input and then see that data exist in angular


#first, get the JSON string from the web - you should be able to see it as a string
#then convert it to JSON



# http://stackoverflow.com/questions/12586410/import-json-into-rails
# http://stackoverflow.com/questions/14374695/saving-external-json-to-db-with-rails
# https://hackhands.com/ruby-read-json-file-hash/
# http://mike.bailey.net.au/2011/02/json-with-ruby-and-rails/
#
# https://www.udemy.com/cart/
