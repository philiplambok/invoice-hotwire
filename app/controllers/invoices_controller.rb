class InvoicesController < ApplicationController
  helper_method :products_options

  def new
    @invoice = Invoice.new
  end

  def create; end

  def products_options
    products = Product.all
    products.map { |product| [product.name, product.id, { data: { price_per_unit: product.amount } }] }
  end

  def add_product_item
    respond_to do |format|
      format.html { head :no_content }
      format.turbo_stream
    end
  end
end
