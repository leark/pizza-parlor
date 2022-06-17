# Pizza Parlor

#### By Seung Lee

#### A website where you can order a pizza with one or more toppings.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## [GitHub Pages Link](https://leark.github.io/pizza-parlor)

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

1. Open Git Bash if on Windows and terminal if on Mac
2. Run the command

    ``Git clone https://github.com/leark/pizza-parlor``

3. Go inside pizza-parlor directory
4. Open index.html

## Known Bugs

* _Any known issues_
* _should go here_

## Tests

```text
Describe: Pizza()

Test1: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.calculateCost()

Test1: "It should return 4 + 1 per topping"
Code: myPizza.calculateCost() where myPizza has 2 toppings
Expected Output: 6

Test2: "It should return 4 + 1 per topping and +5 for large, +3 for medium, +1 for small pizza"
Code: myPizza.calculateCost() where myPizza has 2 toppings and is medium
Expected Output: 9

Describe: Pizza.prototype.addTopping()

Test1: "It should add topping to Pizza object"
Code: myPizza.addTopping('extra cheese')
Expected Output: Pizza { toppings: ["anchovies", "pineapple", "extra cheese"], size: "medium" }

Describe: Pizza.prototype.setSize()

Test1: "It should set size of Pizza object"
Code: myPizza.setSize('large')
Expected Output: Pizza { toppings: ["anchovies", "pineapple", "extra cheese"], size: "large" }

Describe: Pizza.prototype.toppingExists()

Test1: "It should return true if topping is already added to Pizza object"
Code: myPizza.toppingExists('pineapple')
Expected Output: true

Describe: Pizza.prototype.findTopping()

Test1: "It should return the index of topping in the Pizza object"
Code: myPizza.findTopping('pineapple')
Expected Output: 1

Describe: Pizza.prototype.deleteTopping()

Test1: "It should remove topping in the Pizza object if it exists"
Code: myPizza.removeTopping('extra cheese')
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "large" }

Describe: Pizza.prototype.setCustomerName()

Test1: "It should set the customerName of the Pizza object"
Code: myPizza.customerName('Seung')
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "large", customerName: 'Seung' }


Describe: PizzaOrders()

Test1: "It should return a PizzaOrders object with an array of Pizza objects and number of how many there are"
Code: const pizzaOrders = new PizzaOrders(myPizza)
Expected Output: PizzaOrders { orders: [{ toppings: ["anchovies", "pineapple"], size: "large" }], numberOfOrders: 1 }

Describe: PizzaOrders.prototype.addOrder()

Test1: "It should add Pizza object to PizzaOrders"
Code: pizzaOrders.addPizza(myPizza)
Expected Output: PizzaOrders { orders: [{ toppings: ["anchovies", "pineapple"], size: "large" }, { toppings: ["anchovies", "pineapple"], size: "large" }], numberOfOrders: 2 }

```

## License

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee