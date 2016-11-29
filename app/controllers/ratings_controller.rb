class RatingsController < ApplicationController
  before_action :all_ratings

  def index
    render json: @ratings
  end

  private

  def all_ratings
    @ratings = Rating.all
  end

end
