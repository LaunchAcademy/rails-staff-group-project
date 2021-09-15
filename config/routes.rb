Rails.application.routes.draw do
  
  root 'homes#root'

  devise_for :users

  get "/resources", to: "homes#index"

  resources :resources, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :resources, only: [:index, :show]
    end
  end
end
