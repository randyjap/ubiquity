class Api::ListingsController < ApplicationController
  def index
    if current_user
      @listings = Listing
                  .where(lessor: current_user)
                  .where(active: true)
                  .includes(:rentals, rentals: [:lessee])
                  .order("rentals.start_date")
    else
      render json: ["you are not logged in"], status: 401
    end
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.lessor = current_user
    @listing.brand = Brand.find_by(name: params[:listing][:brand])
    @listing.category = Category.find_by(name: params[:listing][:category])
    if @listing.save
      urls = params[:listing][:image_urls]
      urls.each { |url| Photo.create(listing: @listing, image_url: url) } if urls
      render json: @listing, status: 200
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
    @listing = Listing.where(id: params[:listing][:id])
    if @listing.update(params[:listing][:id])
      render "api/listings/#{@listing.id}"
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing)
      .permit(
        :listing_title,
        :detail_desc,
        :location,
        :lat,
        :lng,
        :day_rate,
        :replacement_value,
        :serial
      )
  end
end
