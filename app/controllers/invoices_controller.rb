class InvoicesController < ApplicationController
  def new
    @invoice = Invoice.new
  end

  def create; end
end
