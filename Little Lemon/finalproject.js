// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    // Loop over the dishData array
    for (let i = 0; i < dishData.length; i++) {
      // Declare a finalPrice variable
      let finalPrice;
  
      // Check if taxBoolean is true and calculate the price with tax
      if (taxBoolean === true) {
        finalPrice = dishData[i].price * tax;
      }
      // Check if taxBoolean is false and use the original price
      else if (taxBoolean === false) {
        finalPrice = dishData[i].price;
      }
      // Handle invalid input
      else {
        console.log("You need to pass a boolean to the getPrices call!");
        return; // Exit the function
      }
  
      // Log the dish name and final price
      console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice);
    }
  }

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  // Invoke the getPrices() function
  getPrices(taxBoolean);

  // Check conditions for valid guests parameter
  if (typeof guests === 'number' && guests > 0 && guests < 30) {
    // Calculate and log the discount based on the number of guests
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log('Discount is: $' + discount);
  }
  // Handle invalid guests parameter
  else {
    console.log('The second argument must be a number between 0 and 30');
  }
}

// Call getDiscount()
getDiscount(true, 2); // Example 1
getDiscount(false, 10); // Example 2
getDiscount(true, 'invalid'); // Testing invalid guests parameter
getDiscount(true); // Testing missing guests parameter