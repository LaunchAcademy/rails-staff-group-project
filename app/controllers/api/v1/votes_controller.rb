class Api::V1::VotesController < ApiController
  def create
    review_id = params[:review_id]
    user_id = params[:current_user_id]
    vote_value_string = params[:vote_value]
    if vote_value_string == "upvote"
      vote_value = 1
    else
      vote_value = -1
    end

    current_vote = Vote.find_by(user_id: user_id, review_id: review_id)
    if current_vote == nil
      vote = Vote.new({ review_id: review_id, user_id: user_id, value: vote_value })
      if vote.save
        render json: { vote: vote }
      else
        render json: { error: vote.errors.full_messages }, status: :unprocessable_entity
      end
    else
      current_vote.value = vote_value
      current_vote.save
    end
  end
end
