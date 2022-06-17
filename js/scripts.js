// Business Logic

// create a pizza object with an array of toppings and size
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.numberOfToppings = 0;
  this.customerName;
  this.cost;
}

Pizza.prototype.calculateCost = function () {
  // base cost
  let cost = 4;
  // each toppings cost $1
  cost += this.numberOfToppings;

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
  this.cost = cost;
  return cost;
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
  this.numberOfToppings++;
};

Pizza.prototype.findToppingIndex = function (topping) {
  return this.toppings.indexOf(topping);
};

Pizza.prototype.removeTopping = function (topping) {
  if (this.toppingExists(topping)) {
    this.toppings.splice(this.findToppingIndex(topping), 1);
    this.numberOfToppings--;
    // return true if removal was successful
    return true;
  } else {
    // return false if removal was unsuccessful
    return false;
  }
};

Pizza.prototype.setSize = function (size) {
  this.size = size;
};

Pizza.prototype.toppingExists = function (topping) {
  if (this.findToppingIndex(topping) !== -1) {
    return true;
  } else {
    return false;
  }
};

Pizza.prototype.setCustomerName = function (name) {
  this.customerName = name;
};

function PizzaOrders() {
  this.orders = [];
  this.numberOfOrders = 0;
}

PizzaOrders.prototype.addOrder = function (pizza) {
  this.orders.push(pizza);
  this.numberOfOrders++;
};

// User Interface Logic

$(document).ready(function () {
  const pizzaOrders = new PizzaOrders();
  let pizza = new Pizza([]);
  attachToppingListeners(pizza);

  // add topping button
  $('#addTopping').click(function (event) {
    event.preventDefault();
    // grab topping name (e.g. Bell Peppers)
    const toppingName = $('#topping').val();
    // grab topping ID (e.g. BellPeppers)
    const toppingID = $('#topping').children(':selected').attr('id');

    if (!pizza.toppingExists(toppingID)) {
      const noToppingExists = $('#noTopping');
      if (noToppingExists) {
        noToppingExists.hide();
      }
      pizza.addTopping(toppingID);
      $('<li id="added' + toppingID + '">' + toppingName + '</li>').appendTo(
        '#currentlyAddedToppings'
      );
    }
    if (pizza.numberOfToppings > 0) {
      getPizzaSize(pizza);
      updateCurrentCost(pizza);
      updateCustomerName(pizza);
      enableOrderButton();
    }
  });

  $('#setSize').click(function (event) {
    event.preventDefault();
    getPizzaSize(pizza);
    updateCurrentCost(pizza);
    updateCustomerName(pizza);
    enableOrderButton();
  });

  $('form#orderForm').submit(function (event) {
    event.preventDefault();
    disableOrderButton();
    pizzaOrders.addOrder(pizza);
    updatePizzasOrdered(pizza, pizzaOrders);
    // clear fields

    // remove all toppings from current toppings excpet for noTopping
    let toppingsChildren = $('#currentlyAddedToppings').children();
    for (let i = toppingsChildren.length - 1; i >= 0; i--) {
      if (toppingsChildren[i].id !== 'noTopping') {
        toppingsChildren[i].remove();
      }
    }
    $('#noTopping').show();
    $('#currentSize').text('');
    $('#currentCost').text('');
    // not clearing customer name on purpose in case they want to order again
    pizza = new Pizza([]);
  });
});

// User Interface Logic

function getPizzaSize(pizza) {
  const size = $('#size').val();
  pizza.setSize(size);
  $('#currentSize').text(size);
}

function updateCurrentCost(pizza) {
  $('#currentCost').text('Your pizza will cost: $' + pizza.calculateCost());
}

function updateCustomerName(pizza) {
  const name = $('#customerName').val();
  pizza.setCustomerName(name);
}

function updatePizzasOrdered(pizza, pizzaOrders) {
  let order = $('<li></li>');
  order.text(pizza.customerName);
  let orderDetail = $('<ul></ul>');
  orderDetail.attr('id', pizza.customerName + pizzaOrders.numberOfOrders - 1);
  orderDetail.addClass('orderDetails');
  orderDetail.append($('<li>Toppings: ' + pizza.toppings + '</li>'));
  orderDetail.append($('<li>Size: ' + pizza.size + '</li>'));
  orderDetail.append($('<li>Cost: $' + pizza.cost + '</li>'));
  order.append(orderDetail);
  $(order).appendTo('#orderedPizzas');
}

function enableOrderButton() {
  $('#order').prop('disabled', false);
}

function disableOrderButton() {
  $('#order').prop('disabled', true);
}

// attach listeners for removing toppings
function attachToppingListeners(pizza) {
  $('ul#currentlyAddedToppings').on('click', 'li', function () {
    removeTopping(this.id, pizza);
  });
}

function removeTopping(addedToppingID, pizza) {
  // only remove if there are toppings on the pizza
  if (pizza.numberOfToppings !== 0) {
    $('#' + addedToppingID).remove();
    // remove 'added' part of the id with slice
    pizza.removeTopping(addedToppingID.slice(5));
    updateCurrentCost(pizza);
    // if there are no more toppings show no toppings msg
    if (pizza.numberOfToppings === 0) {
      $('#noTopping').show();
    }
  }
}
