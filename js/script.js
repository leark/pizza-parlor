// create a pizza object with an array of toppings and size
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost() {
  // set base cost
  let cost = 4;
  for (topping in toppings) {
    // add $1 for each topping
    cost += 1;
  }

  // large means +5 cost
  // medium is +3 and small is +1 cost
  switch (size) {
    case ('large'):
      cost += 2;
    case ('medium'):
      cost += 2;
    case ('small'):
      cost += 1;
      break;
    default:
      console.log('Unknown Pizza Size');
  }

  return cost;
}



$(document).ready(function() {

});