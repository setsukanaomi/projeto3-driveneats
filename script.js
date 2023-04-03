let nameFood = '';
let valueFood = '';
let nameDrink = '';
let valueDrink = '';
let nameDessert = '';
let valueDessert = '';

function itemSelect (parentClass, itemClass) {
  // Verify if already has a selected card
  // Search for the selected card
  // If there's a button selected remove the class selected and add hidden to the check button from the card
  const selectedBefore = document.querySelector(parentClass +  " .selected-item");
  if(selectedBefore !== null) {
      selectedBefore.classList.remove("selected-item");
         
      const selectedCheck = selectedBefore.querySelector(".check");
      selectedCheck.classList.add("hidden");
  }

  const select = document.querySelector(itemClass);
  select.classList.add("selected-item");

  const activateCheck = document.querySelector(itemClass + " .check");

  activateCheck.classList.remove("hidden");

  checkActive ('.foods', '.drinks', '.desserts');
}

function checkActive (food, drink, dessert) {

  const checkFood = document.querySelector(food + " .selected-item");
  const checkDrink = document.querySelector(drink + " .selected-item");
  const checkDessert = document.querySelector(dessert + " .selected-item");

  if(checkFood !== null && checkDrink !== null && checkDessert !== null) {
      const selectButton = document.querySelector(".select");
      selectButton.classList.add("hidden");
  
      const selectedButton = document.querySelector(".selected");
      selectedButton.classList.remove("hidden");

      nameFood = checkFood.querySelector('.name').innerHTML;
      valueFood = checkFood.querySelector('.value').innerHTML;
      nameDrink = checkDrink.querySelector('.name').innerHTML;
      valueDrink = checkDrink.querySelector('.value').innerHTML;
      nameDessert = checkDessert.querySelector('.name').innerHTML;
      valueDessert = checkDessert.querySelector('.value').innerHTML;
  }    
}

