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

  uri = URI.parse(ENV["REDISTOGO_URL"])
  REDIS = Redis.new(url: uri)

  # def rating_average
  #   id = self.id
  #   rating_avg = REDIS.get("#{id}_listing")
  #   if rating_avg.nil?
  #     REDIS.set("#{id}_listing", reviews.average(:review).to_f.round(1))
  #   end
  #   rating_avg
  # end

  def rating_average
    reviews.average(:review).to_f.round(1)
  end

  def review_count
    self.reviews.count
  end
end
