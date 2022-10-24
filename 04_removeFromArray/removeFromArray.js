let array = [];
const removeFromArray = function(array, ...args) {


  for(let i = 0; i < array.length; i++){
    
    // if(array[i] == args){

    //   array.splice(i,1);


      args.forEach((arg) => {
        const index = array.indexOf(arg);
        if (index > -1)
          array.splice(index, 1);
        });

        // the above snippet was taken from the stackoverflow
        // https://stackoverflow.com/questions/71484291/dealing-with-multiple-optional-arguments-in-a-javascript-function

    }
    
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
