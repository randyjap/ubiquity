class Api::RentalsController < ApplicationController
  def index
    @rentals = Rental.where(lessee: current_user)
  end
end
