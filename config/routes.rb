Rails.application.routes.draw do
  devise_for :users
  root 'application#index'
  # devise_scope :user do
  #   get '/login', to: 'devise/sessions#new'
  # end
  resources :users, only: [:show, :edit]
  resources :ratings, only: [:create, :update, :index]
  resources :stations, only: [:create, :show, :index]
end
