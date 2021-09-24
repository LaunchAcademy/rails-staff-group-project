class ResourceShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :reviews, :current_user

  has_many :reviews 
end
