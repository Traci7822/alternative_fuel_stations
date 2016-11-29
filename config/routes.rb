Rails.application.routes.draw do
  root 'application#index'
  resources :ratings, only: [:create, :update, :index]
  resources :stations, only: [:create, :show, :index]
end
