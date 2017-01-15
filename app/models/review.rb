class Review < ActiveRecord::Base
  validates :rental, :review, presence: true

  belongs_to :rental
  belongs_to :reviewer, class_name: :User, foreign_key: :reviewer_id

  after_commit :set_listing_average
  has_one :listing, through: :rental

  def set_listing_average
    listing.update!(rating_average: listing.calculate_rating_average)
  end
end
