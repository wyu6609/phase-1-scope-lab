// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "John Smith";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jane Smith";
}
