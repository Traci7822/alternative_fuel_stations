class RatingSerializer < ActiveModel::Serializer
  attributes :id, :station_id, :user_id
end
