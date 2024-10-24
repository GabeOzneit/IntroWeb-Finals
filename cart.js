// Function to load cart items from local storage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous cart items
    cartContainer.innerHTML = '';

    let total = 0;

    // Display each cart item
    cartItems.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContainer.appendChild(productDiv);
        total += item.price;
    });

    cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

// Function to remove item from the cart
function removeFromCart(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems = cartItems.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCart(); // Reload cart items after removal
}

// Call loadCart on page load
document.addEventListener('DOMContentLoaded', loadCart);
