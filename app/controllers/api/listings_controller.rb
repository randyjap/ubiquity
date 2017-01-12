class Api::ListingsController < ApplicationController
  def index
    if current_user
      @listings = Listing.where(lessor: current_user)
    else
      render json: ["you are not logged in"], status: 401
    end
  end

  def show
    @listing = Listing.includes(:lessor).find(params[:id])
  end

  def update
    @listing = Listing.where(id: params[:listing][:id])
    if @listing.update(params[:listing][:id])
      render "api/listings/#{@listing.id}"
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end
end
