class StationsController < ApplicationController
  before_action :authenticate_user!, only: [:favorite]
  before_action :all_stations

  def index
    render json: @stations
  end

  def show
    station = Station.find(params[:id])
    render json: station
  end

  def new
    @station = Station.new
  end

  def create
    @station = Station.create(station_params)
  end

  private

  def all_stations
    @stations = Station.all
  end

  def station_params
    params.require(:station).permit(:id, :fuel_type_code, :name, :street_address, :phone, :hours, :station_id, :city, :state, :zip)
  end


end
