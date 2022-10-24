const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let multiplied = 1;
  for (let i = 0; i < numbers.length; i++){
    multiplied = multiplied * numbers[i];
  }
  return multiplied;
};

const power = function(number, power) {
	let pow = Math.pow(number, power);
  return pow;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
