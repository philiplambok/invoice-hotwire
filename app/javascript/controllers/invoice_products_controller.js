import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoice-products"
export default class extends Controller {
  static targets = ["unit", "productItem", "pricePerUnit", "total"]

  updateProductItemPrice(event) {
    const pricePerUnit = this.productItemTarget.selectedOptions[0].dataset.pricePerUnit
    this.pricePerUnitTarget.value = pricePerUnit
    this.totalTarget.value = pricePerUnit * event.target.value
  }

  clearPrices() {
    this.unitTarget.value = ''
    this.pricePerUnitTarget.value = ''
    this.totalTarget.value = ''
  }
}
