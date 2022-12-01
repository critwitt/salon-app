Rails.application.routes.draw do
  resources :appointments
  resources :users, only: [:index, :show, :create]
  resources :appointments, only: [:index, :show, :create, :destroy]
  resources :hair_stylists, only: [:index, :show]
  resources :purchases, only: [:index, :show, :create, :destroy]
  resources :products, only: [:index, :show]
  resources :shopping_carts, only: [:show, :create]
  # route to test your configuration
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
  get '/session', to: 'sessions#show'
  
  post '/login', to: 'sessions#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
