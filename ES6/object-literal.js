const cart_items = document.getElementById('cart');

function addProduct(name, category) {
    return {
        name,
        category
    }
}
var getProduct = addProduct("rendang", "makanan");
// console.log(getProduct);
cart_items.innerHTML = ` Ini adalah ${getProduct.name}`