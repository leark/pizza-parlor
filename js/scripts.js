// Business Logic

// create a pizza object with an array of toppings and size
function Pizza(toppings, size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.calculateCost = function () {
  // set base cost
  let cost = 4;
  for (topping in toppings) {
    // add $1 for each topping
    cost += 1;
  }

  // large means +5 cost
  // medium is +3 and small is +1 cost
  switch (size) {
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
};

Pizza.prototype.setSize = function (size) {
  this.size = size;
};

// User Interface Logic

$(document).ready(function () {
  let pizza = new Pizza();

  // add topping button
  $('#addTopping').click(function (event) {
    event.preventDefault();
    const topping = $('#topping').val();
    console.log('Add topping: ' + topping);
    pizza.addTopping(topping);
    const mostRecentToppingIndex = pizza.toppings.length - 1;
    $(
      '<li id="addedTopping' + mostRecentToppingIndex + '">' + topping + '</li>'
    ).appendTo('ul');
  });
});
