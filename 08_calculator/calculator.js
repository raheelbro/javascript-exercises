const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (array) => array.reduce((sum, item) => sum + item, 0);

const multiply = (numbers) =>
  numbers.reduce((multiply, number) => multiply * number, 1);

const power = (number, power) => Math.pow(number, power);

const factorial = function (number) {
  let fact = 1;
  for (let i = number; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
