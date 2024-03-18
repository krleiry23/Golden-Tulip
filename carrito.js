const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');
let itemCount = 0;

cartIcon.addEventListener('click', toggleCart);

function toggleCart() {
  cartOverlay.style.display = cartOverlay.style.display === 'none' ? 'flex' : 'none';
}

function addToCart(itemName, itemPrice) {
  const item = document.createElement('li');
  item.textContent = ${itemName}: $${itemPrice};
  cartItems.appendChild(item);
  itemCount++;
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = itemCount;
}

// Ejemplo de uso:
addToCart('Producto 1', 10);
addToCart('Producto 2', 20);