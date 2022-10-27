function pigLatin(string) {

  // split the string words into an array
  let array = string.split(" ");

  let word, firstLetter, finalString = "";

  for (let i = 0; i < array.length; i++) {
    // assign array elements to word variable
    word = array[i];
    //console.log("fisrt time word check: " + word)
    // check if first letter of word is a vowel
    if (word[0] == 'a' || word[0] == 'e' ||
      word[0] == 'i' || word[0] == 'o' ||
      word[0] == 'u') {
      word = word + "ay";
      //console.log("vowel check: " + word);
      array[i] = word;
    }
    else {
      // if firstLetter of word is not vowel then 
      // put first letter of word into firstLetter variable

      firstLetter = word[0];
      //console.log("firstLetter: " + firstLetter);

      word = word.replace(word[0], "");
      //console.log("word: " + word);
      //again check if second letter of word is vowel 
      for (let j = 0; j < word.length; j++) {
        if (word[j] == 'a' || word[j] == 'e'
          || word[j] == 'i' || word[j] == 'o'
          || word[j] == 'u') {

          /* if 2nd letter is not a vowel then add it
          to firstLetter and remove the first letter of
          word
          */

          //console.log(" else wala chakkar");
          word = word + firstLetter + 'ay';
          array[i] = word;
          break;

        }
        else {
          firstLetter = firstLetter + word[j];
          console.log("firstLetter: " + firstLetter);
          word = word.replace(word[j], "");
          console.log("word: " + word);
          array[i] = word + firstLetter + "ay";
          console.log(array[i]);
          if (word[j + 1] == 'a' || word[j + 1] == 'e'
            || word[j + 1] == 'i' || word[j + 1] == 'o'
            || word[j + 1] == 'u') {
            firstLetter = firstLetter + word[j];
            word = word.replace(word[j], "");
            array[i] = word + firstLetter + "ay";
            break;
          }
          else {
            break;
          }

        }

      }

    }

  }
  finalString = array.join(" ");
  return finalString;

  console.log(firstLetter);
};

// Do not edit below this line
module.exports = pigLatin;
