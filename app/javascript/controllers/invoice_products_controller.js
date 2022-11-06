import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoice-products"
export default class extends Controller {
  static targets = ["unit", "productItem", "pricePerUnit", "total"]

  updateProductItemPrice(event) {
    const pricePerUnit = this.productItemTarget.selectedOptions[0].dataset.pricePerUnit
    this.pricePerUnitTarget.value = this.toIdr(pricePerUnit)
    const total = pricePerUnit * event.target.value
    this.totalTarget.value = this.toIdr(total)
    this.totalTarget.setAttribute('data-amount', total)
    this.totalTarget.dispatchEvent(new Event('change'))
  }

  clearPrices() {
    this.unitTarget.value = ''
    this.pricePerUnitTarget.value = ''
    this.totalTarget.value = ''
    this.totalTarget.dispatchEvent(new Event('change'))
  }

  toIdr(number) {
    const idr = new Intl.NumberFormat('id').format(number)
    return `Rp ${idr}`
  }
}
