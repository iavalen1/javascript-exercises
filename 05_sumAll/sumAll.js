const sumAll = function(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {return "ERROR";}
  else if (num1 < 0 || num2 < 0) {return "ERROR";}
  
  let result = 0;
  let low = Math.min(num1,num2);
  let high = Math.max(num1,num2);

  for (let i = low; low <= high; low++) {
    result += low;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
