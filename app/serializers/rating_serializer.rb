class RatingSerializer < ActiveModel::Serializer
  attributes :id, :station_id, :user_id, :stars

  belongs_to :station
  belongs_to :user
end
