class Review < ActiveRecord::Base
  validates :rental, :review, presence: true
  belongs_to :rental

  has_one :listing, through: :rental
  has_one :reviewer, through: :rental, source: :lessee
end
