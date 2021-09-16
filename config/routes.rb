Rails.application.routes.draw do
  
  root 'homes#root'

  devise_for :users

  get "/resources", to: "homes#index"
  get "/resources/:id", to: "homes#index"
  get "/resources/new", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :resources, only: [:index, :show, :create]
    end
  end
end
