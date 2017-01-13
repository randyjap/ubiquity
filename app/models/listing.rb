class Listing < ActiveRecord::Base
  validates :lessor, :listing_title, :detail_desc,
    :location, :lat, :lng, :day_rate, :replacement_value, :serial,
    :brand, :category, :active, presence: true

  belongs_to :lessor, class_name: :User, foreign_key: :lessor_id
  belongs_to :brand
  belongs_to :category

  has_many :rentals
  has_many :photos
  has_many :reviews, through: :rentals

  def rating_average
    return 0 if reviews.average(:review).nil?
    reviews.average(:review).round
  end

  def review_count
    self.reviews.count
  end
end
