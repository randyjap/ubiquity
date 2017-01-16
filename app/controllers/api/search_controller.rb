class Api::SearchController < ApplicationController
  def index
    brand_filters = brand_params.empty? ? Brand.all.pluck(:name) : brand_params
    category_filters = category_params.empty? ? Category.all.pluck(:name) : category_params
    rating_filter = rating_params.empty? ? 0 : rating_params.to_i - 0.5
    price_filter = price_params.empty? ? 99999 : price_params
    bounds_filter = bounds_params.empty? ? nil : bounds_params

    if bounds_filter
      @listings = Listing
        .joins(:category, :brand)
        .where(categories: { name: category_filters })
        .where(brands: { name: brand_filters })
        .where("rating_average >= ?", rating_filter)
        .where("day_rate <= ?", price_filter)
        .where("lat < ?", bounds_params[:northEast][:lat])
        .where("lat > ?", bounds_params[:southWest][:lat])
        .where("lng > ?", bounds_params[:southWest][:lng])
        .where("lng < ?", bounds_params[:northEast][:lng])
    else
      @listings = Listing
        .joins(:category, :brand, :reviews)
        .where(categories: { name: category_filters })
        .where(brands: { name: brand_filters })
        .where("rating_average >= ?", rating_filter)
        .where("day_rate <= ?", price_filter)
    end
  end

  private
  def brand_params
    params[:brand]
  end

  def category_params
    params[:category]
  end

  def rating_params
    params[:rating]
  end

  def bounds_params
    params[:bounds]
  end

  def price_params
    params[:price]
  end
end
