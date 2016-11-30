class CommentsController < ApplicationController
  def index
    binding.pry
    @comments = Comment.all
    render json: @comments
  end

  def create
    @comment = Comment.create(name: params[:comment][:name], email: params[:comment][:email], content: params[:comment][:content], station_id: params[:station_id])
    if @comment.save
      redirect_to comments_path
    end
  end

  def new
    binding.pry
  end

end
