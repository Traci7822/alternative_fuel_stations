class StationsController < ApplicationController
  before_action :all_stations

  def index
    respond_to do |format|
      format.json {render json: @stations}
      format.html {render text: 'Hello, World'}
    end
  end

  def show
    station = Station.find(params[:id])
    render json: station
  end

  def new
    @station = Station.new
  end

  def create
    @station = Station.new(station_params)
    if @station.save
      render json: @station, status: :created,
      location: @station
    else
      render json: @station.errors, status: :unprocessable_entity
    end
  end

  def update
    @station = Station.find(params[:id])
    if @station.update(station_params)
      render json: station
    else
      render json: @station.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @station = Station.find(params[:id])
    @station.destroy
  end

  private

  def all_stations
    @stations = Station.all
  end

  def station_params
    params.require(:station).permit(:id, :fuel_type_code, :name, :street_address, :phone, :hours, :station_id, :city, :state, :zip, :ev_connector_types)
  end


end
