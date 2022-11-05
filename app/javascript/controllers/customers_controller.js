import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="customers"
export default class extends Controller {
  connect() {
  }

  updateEmail(event){
    console.log(event)
  }
}
