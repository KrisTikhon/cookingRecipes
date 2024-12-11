let cartItems = [];

/**
 * Adds a dish to the cart
 * @param {string} dishName */
function addToCart(dishName) {
    cartItems.push(dishName);
    alert(`${dishName} has been added to your dinner!`);
}

/*** Toggles the cart window visibility*/
function toggleCart() {
    const cartWindow = document.getElementById("cartWindow");
    const cartList = document.getElementById("cartList");
    const overlay = createOverlay();

    // Populate the cart list
    cartList.innerHTML = ""; 
    if (cartItems.length === 0) {
        cartList.innerHTML = "<li>You didn't choose any dish!</li>";
    } else {
        cartItems.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${item} <button onclick="removeFromCart(${index})">X</button>`;
            cartList.appendChild(listItem);
        });
    }

    // Show or hide the cart window
    if (cartWindow.style.display === "none" || !cartWindow.style.display) {
        cartWindow.style.display = "block";
        overlay.classList.add("visible-overlay");
    } else {
        cartWindow.style.display = "none";
        overlay.classList.remove("visible-overlay");
    }

    // Close the cart when clicking outside
    overlay.addEventListener("click", () => {
        closeCart();
        overlay.classList.remove("visible-overlay");
    });
}

/**
 * Removes an item from the cart
 * @param {number} index */
function removeFromCart(index) {
    cartItems.splice(index, 1); 
    toggleCart();
    toggleCart(); 
}

/*** Closes the cart window */
function closeCart() {
    const cartWindow = document.getElementById("cartWindow");
    cartWindow.style.display = "none";
}

/*** Clicks outside of the cart = closed */
function createOverlay() {
    let overlay = document.querySelector(".hidden-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "hidden-overlay";
        document.body.appendChild(overlay);
    }
    return overlay;
}



