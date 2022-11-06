class Invoice < ApplicationRecord
  belongs_to :customer
  has_many :invoice_products
  has_many :products, through: :invoice_products

  accepts_nested_attributes_for :invoice_products
end
