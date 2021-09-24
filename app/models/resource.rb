class Resource < ApplicationRecord
  has_many :reviews
  
  validates :name, presence: true
  validates :url, presence: true
end
