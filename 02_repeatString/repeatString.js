const repeatString = function(str = "", num = 0) {
  let finalString = "";
  if(num >= 0){
    if(str){
      for(let i = 0; i < num; i++){
        finalString += str;
      }
      
      return finalString;
    }
    else{
      return finalString;
    }
  }
  else if(str == ""){
    return finalString;
  }
  else{
    return "ERROR";
  }
  
  
  
  
};

// Do not edit below this line
module.exports = repeatString;
