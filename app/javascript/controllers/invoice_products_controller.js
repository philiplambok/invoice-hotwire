import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoice-products"
export default class extends Controller {
  static targets = ["unit", "productItem", "pricePerUnit", "total"]

  updateProductItemPrice(event) {
    const pricePerUnit = this.productItemTarget.selectedOptions[0].dataset.pricePerUnit
    this.pricePerUnitTarget.value = this.toIdr(pricePerUnit)
    this.totalTarget.value = this.toIdr(pricePerUnit * event.target.value)
  }

  clearPrices() {
    this.unitTarget.value = ''
    this.pricePerUnitTarget.value = ''
    this.totalTarget.value = ''
  }

  toIdr(number) {
    const idr = new Intl.NumberFormat('id').format(number)
    return `Rp ${idr}`
  }
}
