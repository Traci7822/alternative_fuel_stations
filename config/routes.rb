Rails.application.routes.draw do
  resources :comments
  root 'application#index'
  resources :stations, only: [:create, :show, :index]
end
