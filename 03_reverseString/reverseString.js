const reverseString = function(str = "") {
  let finalString = "";
  let sizeOfString = str.length;
  for(let i = 0; i <= str.length; i++){
    finalString += str.substring(sizeOfString-1, sizeOfString);
    sizeOfString--;
  }
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
