class Api::V1::ResourcesController < ApiController
  def index
    render json: {
      resources: ActiveModelSerializers::SerializableResource.new(Resource.all, each_serializer: ResourceSerializer),
      current_user: current_user
    }
  end

  def show
    render json: Resource.find(params[:id]), serializer: ResourceShowSerializer
  end

  def create
    resource = Resource.new(resource_params)
    if resource.save
      render json: { resource: resource }
    else
      render json: { error: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def resource_params
    params.require(:resource).permit(:name, :url)
  end
end
