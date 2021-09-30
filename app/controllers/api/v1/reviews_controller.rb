class Api::V1::ReviewsController < ApiController
  def create
    review = Review.new(review_params)
    # review.user = current_user
    review.resource_id = params[:resource_id]
    if review.save
      render json: { review: review }
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end