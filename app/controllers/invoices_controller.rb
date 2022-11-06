class InvoicesController < ApplicationController
  helper_method :products_options

  def index
    @invoices = Invoice.all.order(created_at: :desc)
  end

  def new
    @invoice = Invoice.new
  end

  def create
    ApplicationRecord.transaction do
      customer = Customer.find_by(email: params[:invoice][:customer])
      invoice = Invoice.create!(customer: customer)
      total = 0
      params[:invoice_products].each do |product_item|
        invoice_product = invoice.invoice_products.create!(
          product_id: product_item[:product_id],
          unit: product_item[:unit]
        )
        total += invoice_product.product.amount * invoice_product.unit.to_i
      end
      invoice.update!(total: total)
    end
    redirect_to invoices_path
  end

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
