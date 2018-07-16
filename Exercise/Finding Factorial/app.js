// 1. With recursion

function factorial(num) {
  if (num < 0) 
        return -1;
  else if (num === 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}
console.log(factorial(5));

/*
2. With a while loop
function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
*/

/*
3. With a for loop
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
*/