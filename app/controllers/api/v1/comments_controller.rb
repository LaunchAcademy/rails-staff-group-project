class Api::V1::CommentsController < ApiController
  def create
    comment = Comment.new(comment_params)
    comment.resource_id = params[:resource_id]
    if comment.save
      render json: { comment: comment }
    else
      render json: { error: comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :rating)
  end
end