class Listing < ActiveRecord::Base
  validates :lessor, :listing_title, :detail_desc,
    :location, :lat, :lng, :day_rate, :replacement_value, :serial,
    :brand, :category, :active, presence: true

  belongs_to :lessor, class_name: :User, foreign_key: :lessor_id
  belongs_to :brand
  belongs_to :category

  has_many :rentals
  has_many :photos
end
