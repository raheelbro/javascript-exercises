const leapYears = function(num) {
  
  if((num % 400 == 0) || (num % 4 == 0 && num % 5 != 0)){
    return true;
  }
  
  else {
    return false;
  }

};

// Do not edit below this line
module.exports = leapYears;
