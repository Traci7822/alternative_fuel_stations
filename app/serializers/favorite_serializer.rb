class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :station_id, :user_id
end
