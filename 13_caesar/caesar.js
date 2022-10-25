const overflow = function (charcode, number) {

  if (number > 0) {
    let count = charcode;
    let inc = 1
    let sum = 0;

    for (let i = 1; i <= number; i++) {

      count = count + inc;
      sum = sum + inc;
      console.log("sum: " + sum + " count: " + count);

      if (count == 90) {
        console.log(number - sum);
        count = 65 + (number - sum);
        console.log(count);
        return count;
      }

    }
    return count;
  }
  else {
    let count = charcode;
    let inc = 1;
    let sum = 0;

    for (let i = 0; i >= number; i--) {

      count = count - inc;
      sum = sum - inc;
      console.log("sum: " + sum + " count: " + count);

      if (count == 65) {
        console.log(number + sum);
        count = 90 - (number + sum);
        console.log(count);
        return count;
      }
    }
  }
}





const caesar = function (string, number) {

  console.log(overflow(67, -5));
  let charCode = [];


  // for (let i = 0; i < string.length; i++) {
  //   if ((string.charCodeAt(i) >= 65 &&
  //     string.charCodeAt(i) <= 90) ||
  //     (string.charCodeAt(i) >= 97 &&
  //       string.charCodeAt(i) <= 122)) {

  //     let overflow;
  //     if (string.charCodeAt(i) + number > 90) {
  //       for (let j = number; j > 0; j--) {
  //         overflow = string.charCodeAt(i) + 1;
  //         if (overflow == 90) {
  //           overflow = 65 + j;
  //         }
  //       }
  //       charCode[i] = overflow;
  //     }
  //     else {
  //       charCode[i] = string.charCodeAt(i) + number;
  //     }

  //   }
  //   else {
  //     charCode[i] = string.charCodeAt(i);
  //   }

  // }
  // console.log(charCode);

  // //console.log(charCodeAt(65));
  // let crypticMsg = "";

  // for (let i = 0; i < charCode.length; i++) {

  //   crypticMsg += String.fromCharCode(parseInt(charCode[i]));


  //   //String.fromCharCode(parseInt(66, 16));
  // }
  // console.log(crypticMsg);
  // return crypticMsg;
};

// Do not edit below this line
module.exports = caesar;
