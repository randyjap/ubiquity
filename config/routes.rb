Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:new, :create, :destroy]
    resources :listings, only: [:index, :show, :update]
    resources :rentals, only: [:index, :create]
    resources :search, only: [:index]
    resources :options, only: [:index]
    resources :reviews, only: [:create]
  end
end
