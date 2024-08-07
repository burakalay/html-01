//store the cart object
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // create a product object
    const product = { name: productName, price: productPrice };
    // add the product to the cart
    cart.push(product);
    // save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // inform the user
    alert(productName + " has been added to your cart.");
    // update the cart display
    updateCartDisplay();
}

// function to update the cart (optional, if you want instant display)
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountContainer = document.getElementById('total-amount');

    if (cartItemsContainer && totalAmountContainer) {
        cartItemsContainer.innerHTML = ''; // First, clear the existing content

        let totalAmount = 0;

        cart.forEach((product) => {
            totalAmount += product.price;

            // Display product details
            const item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `<p>${product.name} - $${product.price.toFixed(2)}</p>`;
            cartItemsContainer.appendChild(item);
        });

        totalAmountContainer.textContent = totalAmount.toFixed(2);
    }
}

// function for the checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Thank you for your purchase!');
    cart = []; // Clear the cart
    localStorage.removeItem('cart'); // Remove the cart from local storage
    updateCartDisplay(); // Update the cart display
}

// function to load and display cart data
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountContainer = document.getElementById('total-amount');

    if (cartItemsContainer && totalAmountContainer) {
        cartItemsContainer.innerHTML = ''; // First, clear the existing content

        let totalAmount = 0;

        cart.forEach((product) => {
            totalAmount += product.price;

            // displaythe  product details
            const item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `<p>${product.name} - $${product.price.toFixed(2)}</p>`;
            cartItemsContainer.appendChild(item);
        });

        totalAmountContainer.textContent = totalAmount.toFixed(2);
    }
}

// load the cart when the page loads
window.onload = loadCart;
