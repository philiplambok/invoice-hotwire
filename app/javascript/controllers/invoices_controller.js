import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoices"
export default class extends Controller {
  static targets = ["emailField", "total", "totalItem"]

  updateEmail(event){
    this.emailFieldTarget.value = event.target.value
  }

  updateTotal() {
    let totalItems = 0 
    this.totalItemTargets.forEach(totalItemTarget => {
      const amount = totalItemTarget.dataset.amount

      if(amount) {
        totalItems += parseInt(amount)
      }
    })
    this.totalTarget.textContent = this.toIdr(totalItems)
  }

  toIdr(number) {
    const idr = new Intl.NumberFormat('id').format(number)
    return `Rp ${idr}`
  }
}
