class Api::V1::ResourcesController < ApplicationController
  def index
    render json: Resource.all
  end

  def show
    render json: Resource.find(params[:id])
  end
end