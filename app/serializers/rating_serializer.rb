class RatingSerializer < ActiveModel::Serializer
  attributes :id, :station_id, :stars

  belongs_to :station
end
