const fibonacci = function (number) {
  let previous = 0;
  let next = 1;
  let fib;
  let num = parseInt(number);

  if (number < 0) {
    return "OOPS";
  }
  else if (number == 1) {
    return 1;
  }
  
  for (let i = 0; i < num; i++) {
    if (i == 0) {
      fib = 0;
    }
    else {
      fib = previous + next;
      previous = next;
      next = fib;
      //console.log(fib);
    }

  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
