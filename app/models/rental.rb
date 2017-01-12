class Rental < ActiveRecord::Base
  validates :listing, :lessee, :start_date, :end_date, presence: true

  belongs_to :lessee, class_name: :User, foreign_key: :lessee_id
  belongs_to :listing

  has_one :review
end
