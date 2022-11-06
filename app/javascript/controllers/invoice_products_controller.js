import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoice-products"
export default class extends Controller {
  static targets = ["unit", "productItem", "pricePerUnit", "total"]

  updateProductItemPrice(event) {
    const pricePerUnit = this.findPricePerUnitFor(this.productItemTarget)
    const total = pricePerUnit * event.target.value
    this.totalTarget.value = this.toIdr(total)
    this.totalTarget.setAttribute('data-amount', total)
    this.totalTarget.dispatchEvent(new Event('change'))
  }

  updatePrices(event) {
    if(event.target.selectedOptions[0].value == '') {
      this.unitTarget.value = ''
      this.pricePerUnitTarget.value = ''
      this.totalTarget.value = ''
    } else {
      this.pricePerUnitTarget.value = this.toIdr(this.findPricePerUnitFor(event.target))
      this.unitTarget.value = 1
    }
    this.totalTarget.dispatchEvent(new Event('change'))
    this.unitTarget.dispatchEvent(new Event('change'))
  }

  findPricePerUnitFor(element) {
    return element.selectedOptions[0].dataset.pricePerUnit
  }

  toIdr(number) {
    const idr = new Intl.NumberFormat('id').format(number)
    return `Rp ${idr}`
  }
}
