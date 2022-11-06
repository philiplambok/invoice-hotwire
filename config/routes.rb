Rails.application.routes.draw do
  resources :invoices, only: %i[new create] do
    collection do
      post :add_product_item
    end
  end
  root to: 'invoices#new'
end
