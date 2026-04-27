const cart = [];
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");
function renderCart() {
cartList.innerHTML = "";
cart.forEach((item) => {
const listItem = document.createElement("li");
listItem.textContent = `${item.product} - ${item.price}kr (x${item.quantity})`;
cartList.appendChild(listItem);
});
}
addButton.addEventListener("click", () => {
const name = productInput.value;
const price = Number(priceInput.value);
if (name !== "" && !isNaN(price)){
    const existingProduct = cart.find(item => item.product === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
     const newProduct = { 
        product: name,
        price: price,
        quantity: 1
     };
     cart.push(newProduct);
    }
    
    productInput.value = "";
    priceInput.value = "";
    renderCart();
     } else {
        alert("Vänligen ange ett giltigt produktnamn och pris.");
     }   
});
