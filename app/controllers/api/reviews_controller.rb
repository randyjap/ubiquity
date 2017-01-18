class Api::ReviewsController < ApplicationController
  def create
    if Rental.find(params[:review][:rental_id]).lessee != current_user
      return render json: ["You can only review your own rentals"], status: 422
    end

    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: 200
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rental_id, :review, :review_text)
  end
end
