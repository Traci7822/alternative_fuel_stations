class StationSerializer < ActiveModel::Serializer
  attributes :id, :fuel_type_code, :name, :street_address, :phone, :hours, :station_id, :city, :state, :zip

  has_many :ratings
end
