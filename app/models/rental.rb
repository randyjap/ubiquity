class Rental < ActiveRecord::Base
  validates :listing, :lessee, :start_date, :end_date, presence: true

  belongs_to :lessee, class_name: :User, foreign_key: :lessee_id
  belongs_to :listing

  has_one :review
  has_one :lessor, through: :listing

  def total
    days = (self.end_date - self.start_date).to_i
    rate = self.listing.day_rate
    days * rate
  end
end
