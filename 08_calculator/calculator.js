const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function (numbers) {
  let multiplied = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplied = multiplied * numbers[i];
  }
  return multiplied;
};

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
