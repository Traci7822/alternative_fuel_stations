class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :station_id, :name, :email
end
