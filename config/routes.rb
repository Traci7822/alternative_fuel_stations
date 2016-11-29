Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'application#index'
  resources :users, only: [:show, :edit]
  resources :ratings, only: [:create, :update, :index]
  resources :stations, only: [:create, :show, :index]
end
