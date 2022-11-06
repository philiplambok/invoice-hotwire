class InvoicesController < ApplicationController
  helper_method :products_options

  def new
    @invoice = Invoice.new
  end

  def create
    binding.pry
  end

  def products_options
    products = Product.all
    products.map { |product| [product.name, product.id, { data: { price_per_unit: product.amount } }] }
  end
end
