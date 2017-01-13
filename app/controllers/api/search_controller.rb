class Api::SearchController < ApplicationController
  def index
    brand_filters = brand_params ? brand_params : Brand.all.pluck(:name)
    category_filters = category_params ? category_params : Category.all.pluck(:name)

    if bounds_params
      @listings = Listing
        .joins(:category, :brand)
        .where(categories: { name: category_filters })
        .where(brands: { name: brand_filters })
        .where("lat < ?", bounds_params[:northEast][:lat])
        .where("lat > ?", bounds_params[:southWest][:lat])
        .where("lng > ?", bounds_params[:southWest][:lng])
        .where("lng < ?", bounds_params[:northEast][:lng])
    else
      @listings = Listing
        .joins(:category, :brand)
        .where(categories: { name: category_filters })
        .where(brands: { name: brand_filters })
    end
  end

  private
  def bounds_params
    params[:bounds]
  end

  def brand_params
    params[:brand]
  end

  def category_params
    params[:category]
  end
end
