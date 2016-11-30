class CommentsController < ApplicationController
  def index
    binding.pry
    @comments = Comment.all
    render json: @comments
  end

  def create
    binding.pry
  end

  def new
    binding.pry
  end

  private

  def comment_params
    params.require(:comment).permit(:name, :email, :content, :station_id)
  end
end
