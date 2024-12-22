// Simple Add to Cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " has been added to the cart!");
    console.log(cart);
}

// Example usage: Add event listeners to buttons
document.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = document.querySelectorAll('.product h3')[index].textContent;
        const price = document.querySelectorAll('.product p')[index].textContent;
        addToCart(productName, price);
    });
});