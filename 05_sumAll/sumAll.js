const sumAll = function(num1, num2) {

  let sum = 0;
  
  if(num1 < 0 || num2 < 0 || 
    typeof(num1) !== typeof(1) || 
    typeof(num2) !== typeof(1)){

    return "ERROR";
  }
  else{

    if(num1 < num2){
      sum = num1;
      for (let i = num1; i <= num2; i++){
        sum = sum + i;
        
      }
    }
    else{
      sum = num2;
      for (let i = num2; i <= num1; i++){
        sum = sum + i;
        
    }
  }
  }

return sum -1;
};

// Do not edit below this line
module.exports = sumAll;
