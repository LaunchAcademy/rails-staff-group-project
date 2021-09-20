class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :comments

  has_many :comments 
end
