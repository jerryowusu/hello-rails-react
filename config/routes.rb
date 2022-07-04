Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :v1, defaults: { format: 'json' } do 
    get 'greetings', to: 'greetings#index'
  end 
  get '*path', to: 'static_pages#index'
end
