Rails.application.routes.draw do
  resources :comments
  root 'application#index'
  resources :ratings, only: [:create, :update, :index]
  resources :stations, only: [:create, :show, :index]
end
