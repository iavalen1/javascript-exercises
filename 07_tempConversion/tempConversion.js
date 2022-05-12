const ftoc = function(tempF) {
  let result;

  result = (5/9)*(tempF-32);

  return Math.round(result*10) / 10;
};

const ctof = function(tempC) {
  let result;

  result = (9/5)*(tempC) + 32;

  return Math.round(result*10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
