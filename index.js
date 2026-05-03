// Select all product cards
const cards = document.querySelectorAll(".card");

// Select total price display
const totalDisplay = document.querySelector(".total");


// 🔁 FUNCTION: calculate and update total price
function updateTotal() {
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
cards.forEach(card => {

  const plusBtn = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const quantity = card.querySelector(".quantity");
  const deleteBtn = card;}
)

console.log(totalDisplay.textContent)