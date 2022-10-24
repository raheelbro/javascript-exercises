const ftoc = function(num) {
  //x °F ≘ (x − 32) × 5/9 °C 
  let f = Math.round(((num-32)*5/9) * 10 ) / 10;
  return f;
};

const ctof = function(num) {
  // x °C ≘ (x × 9/5 + 32) °F 
  let c = Math.round((num * 9/5 + 32) * 10) / 10;
  return c;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
