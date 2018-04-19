'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // var tableChart = document.getElementsByTagName('tbody');
  // tableChart.removeChild(tableChart.childNodes);
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableChart = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for (var i in Cart) {
    
  
  // TODO: Create a TR
    var tableRow = document.createElement('tr');
  
    
    // TODO: Create a TD for the delete link, quantity,  and the item

    var tableCell = document.createElement('td');

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableRow.appendChild(tableCell);
    tableChart.appendChild(tableRow);
    
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
