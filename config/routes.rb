Rails.application.routes.draw do
  resources :invoices, only: %i[new create]
  root to: 'invoices#new'
end
