const reverseString = function(str) {
  let finalString = "";
  let sizeOfString = str.length;
  for(let i = 0; i <= str.length; i++){
    finalString += str.substring(sizeOfString-1, sizeOfString);
    sizeOfString--;
  }
  return finalString;
};

const removePunctuation = function(str){
  let finalString = "";
  for (let i = 0; i < str.length; i++){
    if(str[i] == '.' || str[i] == ',' || str[i] == '?' 
    || str[i] == '!' || str[i] == ':' || str[i] == ';'
    || str[i] == '-' || str[i] == '_' || str[i] == '(' 
    || str[i] == ')' || str[i] == '{' || str[i] == '}'
    || str[i] == '[' || str[i] == ']' || str[i] == '\''
    || str[i] == '\"' || str[i] == '`' || str[i] == '~'
    || str[i] == '#' || str[i] == '$' || str[i] == '%'
    || str[i] == '^' || str[i] == '&' || str[i] == '*'
    || str[i] == '+' || str[i] == '=' || str[i] == '@'
    || str[i] == '<' || str[i] == '>' || str[i] == '/'
    || str[i] == '\\' || str[i] == ' '){
      continue;
    }
    else{
      finalString += str[i];
    }
  }
  return finalString;
}



const palindromes = function (str) {
  let noPunct = removePunctuation(str);

  let revString = reverseString(noPunct).toLowerCase();
  let string = noPunct.toLowerCase();

  if(revString == string){
    return true;
  }
  else{
    return false;
  }
  
};

// Do not edit below this line
module.exports = palindromes;
