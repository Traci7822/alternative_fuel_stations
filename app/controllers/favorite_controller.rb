class FavoritesController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update]
  before_action :all_favorites

  def index
    render json: @favorites
  end

  private

  def all_favorites
    @favorites = Favorite.all
  end

end
