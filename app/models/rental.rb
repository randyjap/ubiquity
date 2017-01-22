class Rental < ActiveRecord::Base
  validates :listing, :lessee, :start_date, :end_date, presence: true

  belongs_to :lessee, class_name: :User, foreign_key: :lessee_id
  belongs_to :listing

  has_one :review
  has_one :lessor, through: :listing

  validate :end_date_before_start_date?, :overlap?, :in_the_future?

  def total
    days = (self.end_date - self.start_date).to_i
    rate = self.listing.day_rate
    days * rate
  end

  def find_overlap
    Rental
      .where.not(id: self.id)
      .where(listing: listing)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
        NOT( (start_date >= :end_date) OR (end_date <= :start_date) )
      SQL
  end

  def end_date_before_start_date?
    errors.add(:drop_off, 'must be after pick up date') unless end_date > start_date
  end

  def overlap?
    errors.add(:dates, "of another rental overlap yours") unless find_overlap.empty?
  end

  def in_the_future?
    errors.add(:dates, "must be in the future") if start_date <= Time.now || end_date <= Time.now
  end
end
