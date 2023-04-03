let valueTotal = 0.0;
let nameFood = "";
let valueFood = "";
let nameDrink = "";
let valueDrink = "";
let nameDessert = "";
let valueDessert = "";


function itemSelect(parentClass, itemClass) {
  // Verify if already has a selected card
  // Search for the selected card
  // If there's a button selected remove the class selected and add hidden to the check button from the card
  const selectedBefore = document.querySelector(
    parentClass + " .selected-item"
  );
  if (selectedBefore !== null) {
    selectedBefore.classList.remove("selected-item");

    const selectedCheck = selectedBefore.querySelector(".check");
    selectedCheck.classList.add("hidden");
  }

  const select = document.querySelector(itemClass);
  select.classList.add("selected-item");

  const activateCheck = document.querySelector(itemClass + " .check");

  activateCheck.classList.remove("hidden");

  checkActive(".foods", ".drinks", ".desserts");
}


function parseValues() {
  const parsedFoodValue = Number(
    valueFood.substring(2, valueFood.length - 1).replace(",", ".")
  );
  const parsedDrinkValue = Number(
    valueDrink.substring(2, valueDrink.length - 1).replace(",", ".")
  );
  const parsedDessertValue = Number(
    valueDessert.substring(2, valueDessert.length - 1).replace(",", ".")
  );

  return (parsedFoodValue + parsedDrinkValue + parsedDessertValue)
    .toFixed(2)
    .replace(".", ",");
}

function checkActive(food, drink, dessert) {
  const checkFood = document.querySelector(food + " .selected-item");
  const checkDrink = document.querySelector(drink + " .selected-item");
  const checkDessert = document.querySelector(dessert + " .selected-item");

  if (checkFood !== null && checkDrink !== null && checkDessert !== null) {
    const selectButton = document.querySelector(".select");
    selectButton.classList.add("hidden");

    const selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("hidden");

    nameFood = checkFood.querySelector(".item-name").innerHTML;
    valueFood = checkFood.querySelector(".item-price").innerHTML;
    nameDrink = checkDrink.querySelector(".item-name").innerHTML;
    valueDrink = checkDrink.querySelector(".item-price").innerHTML;
    nameDessert = checkDessert.querySelector(".item-name").innerHTML;
    valueDessert = checkDessert.querySelector(".item-price").innerHTML;
  }
}

function sendMessage() {
  valueTotal = parseValues();

  const cellphoneNumber = 5511982568093;

  const textMessage = "Olá, gostaria de fazer o pedido:";

  const foodMessage = "- Prato: " + nameFood;
  const drinkMessage = "- Bebida: " + nameDrink;
  const dessertMessage = "- Sobremesa: " + nameDessert;
  const totalOrder = "Total: R$ " + valueTotal;

  let fullMessage =
    textMessage +
    "\n" +
    foodMessage +
    "\n" +
    drinkMessage +
    "\n" +
    dessertMessage +
    "\n" +
    totalOrder +
    "\n\n";

  const wppMessage =
    "https://wa.me/" +
    cellphoneNumber +
    "?text=" +
    encodeURIComponent(fullMessage);

  console.log(wppMessage);

  window.open(wppMessage);
}
