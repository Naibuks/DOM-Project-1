// Select total price display
const totalDisplay = document.querySelector(".total");

// 🔁 FUNCTION: calculate and update total price
function updateTotal() {
  const cards = document.querySelectorAll(".card"); // re-select in case items were deleted
  let total = 0;

  cards.forEach(card => {
    const priceText = card.querySelector(".unit-price").textContent;
    const price = Number(priceText.replace("$", "").trim());

    const quantity = Number(card.querySelector(".quantity").textContent);

    total += price * quantity;
  });

  totalDisplay.textContent = total + " $";
}


// 🧩 LOOP THROUGH EACH PRODUCT CARD
function attachEvents() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantity = card.querySelector(".quantity");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const likeBtn = card.querySelector(".fa-heart");

    // ➕ Increase quantity
    plusBtn.addEventListener("click", () => {
      quantity.textContent = Number(quantity.textContent) + 1;
      updateTotal();
    });

    // ➖ Decrease quantity
    minusBtn.addEventListener("click", () => {
      let currentQty = Number(quantity.textContent);
      if (currentQty > 0) {
        quantity.textContent = currentQty - 1;
        updateTotal();
      }
    });

    // 🗑 Delete item
    deleteBtn.addEventListener("click", () => {
      card.parentElement.remove(); // removes the whole product container
      updateTotal();
    });

    // ❤️ Like item (toggle color)
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("text-danger");
    });
  });
}


// 🚀 INIT
attachEvents();
updateTotal();