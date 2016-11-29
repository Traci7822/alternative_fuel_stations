Rails.application.routes.draw do
  root 'application#index'
  devise_for :users
  resources :users
  resources :ratings, only: [:create, :update, :index]
  resources :stations, only: [:create, :show, :index]
end
