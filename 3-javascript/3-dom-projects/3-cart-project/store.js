const cusomShopContainer = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");

cusomShopContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const currentElement = e.target;

  if (currentElement.classList.contains("shop-item-button")) {
    const mainShopItemDiv = currentElement.parentElement.parentElement;

    // console.log(mainShopItemDiv, "mainShopItemDiv");
    const cartItemName =
      mainShopItemDiv.querySelector(".shop-item-title").innerText;
    const cartItemImage = mainShopItemDiv.querySelector(".shop-item-image").src;
    const cartItemPrice =
      mainShopItemDiv.querySelector(".shop-item-price").innerText;

    const divElement = document.createElement("div");
    divElement.className = "cart-row";
    divElement.innerHTML = `<div class="cart-item cart-column">
              <img
                class="cart-item-image"
                src="${cartItemImage}"
                width="100"
                height="100"
              />
              <span class="cart-item-title">${cartItemName}</span>
            </div>
            <span class="cart-column">
              $ <span class="cart-price-item-item">${cartItemPrice}</span>
            </span>
            <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1" />
              <button class="btn btn-danger btn-remove" type="button">
                REMOVE
              </button>
            </div>`;

    // console.log(divElement, "divElement");
    cartItems.append(divElement);
  }
});
