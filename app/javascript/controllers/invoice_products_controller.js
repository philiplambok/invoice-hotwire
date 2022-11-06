import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoice-products"
export default class extends Controller {
  static targets = ["pricePerUnit", "total"]

  updateProductItemPrice(event) {
  }
}
