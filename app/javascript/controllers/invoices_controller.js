import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="invoices"
export default class extends Controller {
  static targets = ["emailField"]

  connect() {
    console.log("Connected!")
  }

  updateEmail(event){
    this.emailFieldTarget.value = event.target.value
  }
}
