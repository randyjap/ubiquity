class Api::SearchController < ApplicationController
  def index
    @listings = Listing.all
  end
end

# if params[:searchFilters][:location]
# if params[:searchFilters][:brand]
# if params[:searchFilters][:cat]

# benches = bounds ? Bench.in_bounds(bounds) : Bench.all
#
# if (params[:minSeating] && params[:maxSeating])
#   benches = benches.where(seating: seating_range)
# end
# @benches = benches.includes(:reviews, :favorite_users)
# render :index
#
# private
#
#   def seating_range
#     (params[:minSeating]..params[:maxSeating])
#   end
#
#   def bench_params
#     params.require(:bench).permit(
#       :lat,
#       :lng,
#       :description,
#       :seating,
#       :picture_url
#     )
#   end
#
#   def bounds
#     params[:bounds]
#   end
# end
