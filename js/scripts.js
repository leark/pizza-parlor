// Business Logic

// create a pizza object with an array of toppings and size
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.numberOfToppings = 0;
}

Pizza.prototype.calculateCost = function () {
  // set base cost
  let cost = 4;
  // each toppings cost $1
  cost += numberOfToppings;

  // large means +5 cost
  // medium is +3 and small is +1 cost
  switch (this.size) {
    case 'Large':
      cost += 2;
    case 'Medium':
      cost += 2;
    case 'Small':
      cost += 1;
      break;
    default:
      console.log('Unknown Pizza Size');
  }
  return cost;
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
  this.numberOfToppings++;
};

Pizza.prototype.setSize = function (size) {
  this.size = size;
};

Pizza.prototype.toppingExists = function (topping) {
  if (this.toppings.find((element) => element === topping)) {
    return true;
  }
  return false;
};

// User Interface Logic

$(document).ready(function () {
  let pizza = new Pizza([]);
  attachToppingListeners();

  // add topping button
  $('#addTopping').click(function (event) {
    event.preventDefault();
    const topping = $('#topping').val();
    if (!pizza.toppingExists(topping)) {
      const noToppingExists = $('#noTopping');
      if (noToppingExists) {
        noToppingExists.remove();
      }
      pizza.addTopping(topping);
      const mostRecentToppingIndex = pizza.numberOfToppings - 1;
      $(
        '<li id="addedTopping' +
          mostRecentToppingIndex +
          '">' +
          topping +
          '</li>'
      ).appendTo('#currentlyAddedToppings');
    }
    if (pizza.numberOfToppings > 0) {
      showCurrentCost(pizza);
      enableOrderButton();
    }
  });

  $('#setSize').click(function (event) {
    event.preventDefault();
    showCurrentCost(pizza);
    enableOrderButton();
  });

  $('form#orderForm').submit(function (event) {
    event.preventDefault();
    disableOrderButton();
    pizza = new Pizza([]);
  });
});

function showCurrentCost(pizza) {
  const size = $('#size').val();
  pizza.setSize(size);
  $('#currentSize').text(pizza.size);
  $('#currentCost').text('Your pizza will cost: $' + pizza.calculateCost());
}

function enableOrderButton() {
  $('#order').prop('disabled', false);
}

function disableOrderButton() {
  $('#order').prop('disabled', true);
}

function attachToppingListeners() {}
