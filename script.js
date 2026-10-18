//your code here
document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("itemInput");
    const addBtn = document.getElementById("addBtn");
    const cartList = document.getElementById("cartList");

    function getCart() {
        const cart = localStorage.getItem("shoppingCart");
        return cart ? JSON.parse(cart) : [];
    }

    function saveCart(cart) {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function renderCart() {
        cartList.innerHTML = "";
        const cart = getCart();
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.style.marginLeft = "10px";
            removeBtn.addEventListener("click", () => {
                removeItem(index);
            });

            li.appendChild(removeBtn);
            cartList.appendChild(li);
        });
    }

    function addItem() {
        const itemName = itemInput.value.trim();
        if (itemName !== "") {
            const cart = getCart();
            cart.push(itemName);
            saveCart(cart);
            itemInput.value = "";
            renderCart();
        }
    }

    function removeItem(index) {
        const cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        renderCart();
    }

    addBtn.addEventListener("click", addItem);

    renderCart();
});