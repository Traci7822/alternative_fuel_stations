class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :station_id
end
