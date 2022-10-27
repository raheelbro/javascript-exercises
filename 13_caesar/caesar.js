const overflow = function (charcode, number) {

  let count = charcode;
  let inc = 1
  let sum = 0;

  if (number > 25) {
    while (number > 25) {
      number = number - 25;
      console.log(number + "-positive");
    }
  }
  else if (number < -25) {
    while (number < -25) {
      number = number + 25;
      console.log(number + "negative");
    }
  }
  else {
    number;
    console.log(number + " 0 or +- 25");

  }

  if (charcode >= 65 && charcode <= 90) {
    if (number > 0) {
      /*
      adjust overflow if number is greater 
      than 0 and between 65 and 90
      */
      for (let i = 0; i < number; i++) {

        count = count + inc;
        sum = sum + inc;
        if (count > 90) {
          count = 65 + (number - sum);
          return count;
        }
      }
      return count;
    }
    else if (number < 0) {
      /*
      adjust overflow if number is less
      than 0 and between 65 and 90
      */
      // if (number = -1) {
      //   count = 90;
      //   return count;
      // }
      // else {
      for (i = number; i < 0;) {
        count = count - inc;

        sum++;

        console.log("i: " + i + " , sum: " + sum);
        if (count < 65) {
          if (i == -1) {
            count = 90;
            return count;
          }
          else {
            i++;
            count = 90 + i;
            return count;
          }

        }
      }
      // }




      // for (let i = number; i > number; i--) {
      //   count = count - inc;
      //   console.log("i: " + i);
      //   console.log("count: " + count);
      //   sum = sum + inc;
      //   console.log("sum: " + sum);
      //   if (count < 65) {
      //     count = 90 + (number + i);
      //     console.log("number + i: " + number + i);
      //     console.log(count);
      //     return count;
      //   }
      // }
      return count;
    }
  }
  else {

    if (number > 0) {
      /*
      adjust overflow if number is greater 
      than 0 and between 97 and 122
      */

      for (let i = 1; i <= number; i++) {

        count = count + inc;
        sum = sum + inc;
        if (count == 122) {

          count = 97 + (number - sum);
          return count;
        }
      }
      return count;
    }
    else {
      /*
      adjust overflow if number is less 
      than 0 and between 97 and 122
      */
      for (let i = 0; i >= number; i--) {

        count = count - inc;
        sum = sum - inc;

        if (count == 97) {

          count = 122 - (number + sum);
          return count;
        }
      }
      return count;
    }
  }

}

const caesar = function (string, number) {

  console.log(overflow(65, -5));
  let charCode = [];

  // checking if the lenght of charCode of the letter

  for (let i = 0; i < string.length; i++) {

    if ((string.charCodeAt(i) >= 65 &&
      string.charCodeAt(i) <= 90) ||
      (string.charCodeAt(i) >= 97 &&
        string.charCodeAt(i) <= 122)) {

      rightNum = overflow(number);

      charCode[i] = string.charCodeAt(i) + rightNum;
    }
  }

  let crypticMsg = "";

  for (let i = 0; i < charCode.length; i++) {

    crypticMsg += String.fromCharCode(parseInt(charCode[i]));

  }
  console.log(crypticMsg);
  return crypticMsg;
};

// Do not edit below this line
module.exports = caesar;
