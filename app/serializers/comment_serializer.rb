class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating
end
