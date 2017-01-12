Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :listings, only: [:index, :show, :update]
    resources :rentals, only: [:index]
    resources :search, only: [:index]
  end
end
