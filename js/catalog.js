/* global Product, Cart */

'use strict';

var Cart = [];
var cartQty = [];

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var addProduct = document.createElement('option');
    addProduct.setAttribute('id', Product.allProducts[i].name);
    addProduct.textContent = Product.allProducts[i].name;
    selectElement.appendChild(addProduct);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

//  Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  //  suss out the item picked from the select list
  var selectedProduct = document.getElementById('items').value;
  console.log(selectedProduct);
  // get the quantity
  var selectedQuantity = document.getElementById('quantity').value;
  console.log(selectedQuantity);
  cartQty.push(selectedQuantity);
  console.log(cartQty);
  //  using those, create a new Cart item instance
  new CartItem(selectedProduct, selectedQuantity);
  console.log(Cart);
}


//  Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  var cartLS = JSON.stringify(Cart);
  localStorage.setItem('Cart', cartLS);
}

// Update the cart count in the header nav with the number of items in the Cart


function updateCounter() {
  var totalQty = 0;
  var itemCount = document.getElementById('itemCount');
  for (var j in cartQty) {
    totalQty += parseInt(cartQty[j]);
  }
  itemCount.textContent = totalQty;
  console.log(totalQty);
};



// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form


  // TODO: Add a new element to the cartContents div with that information

  
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
