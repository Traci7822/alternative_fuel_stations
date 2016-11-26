Rails.application.routes.draw do
  root 'application#index'
  devise_for :users
  resources :users, only: [:show, :edit]
  resources :favorites, only: [:create, :destroy, :update, :index, :show]
  resources :ratings, only: [:create, :update, :index]
  resources :stations, only: [:create, :show, :index]
end
