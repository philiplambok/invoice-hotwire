import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoices"
export default class extends Controller {
  static targets = ["emailField", "total"]

  updateEmail(event){
    this.emailFieldTarget.value = event.target.value
  }

  updateTotal(event) {
    this.totalTarget.textContent = event.target.value
  }
}
