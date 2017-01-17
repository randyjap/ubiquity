class Listing < ActiveRecord::Base
  validates :lessor, :listing_title, :detail_desc,
    :location, :lat, :lng, :day_rate, :replacement_value, :serial,
    :brand, :category, presence: true

  validates :active, inclusion: { in: [true, false] }

  belongs_to :lessor, class_name: :User, foreign_key: :lessor_id
  belongs_to :brand
  belongs_to :category

  has_many :rentals
  has_many :photos
  has_many :reviews, through: :rentals

  def rating_average
    reviews.average(:review).to_f.round(1)
  end

  def review_count
    self.reviews.count
  end
end
