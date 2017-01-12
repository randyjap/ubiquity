class Review < ActiveRecord::Base
  validates :reviewer, :rental, :review, presence: true
  validates :reviewer, uniqueness: { scope: :rental }

  belongs_to :rental
  belongs_to :reviewer, class_name: :User, foreign_key: :reviewer_id
end
