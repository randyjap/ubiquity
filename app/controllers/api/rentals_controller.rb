class Api::RentalsController < ApplicationController
  def index
    @rentals = Rental.where(lessee: current_user)
  end

  def create
    if (Date.parse(params[:rental][:start_date]) rescue nil).nil?
      return render json: ["Must enter both dates"], status: 422
    end
    listing = Listing.find(params[:rental][:id])
    @rental = Rental.new(rental_params)
    @rental.lessee_id = current_user.id
    @rental.listing = listing
    if @rental.save
      render "api/rentals/show"
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  private

  def rental_params
    params.require(:rental).permit(:start_date, :end_date)
  end
end
