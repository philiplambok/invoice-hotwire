class InvoiceProduct < ApplicationRecord
  belongs_to :invoice
  belongs_to :product

  attribute :price_per_unit
  attribute :total

  def total_amount
    product.amount * unit
  end
end
