class Review < ActiveRecord::Base
  validates :rental, :review, presence: true

  belongs_to :rental
  belongs_to :reviewer, class_name: :User, foreign_key: :reviewer_id

  has_one :listing, through: :rental
end
