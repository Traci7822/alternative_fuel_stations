class StationSerializer < ActiveModel::Serializer
  attributes :id, :fuel_type_code, :name, :street_address, :phone, :hours, :station_id, :city, :state, :zip, :ev_connector_types

  has_many :ratings
  has_many :comments
end
