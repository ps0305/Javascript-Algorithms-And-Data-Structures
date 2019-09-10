Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number.
```js
//using while loop
function repeatStringNumTimes(str, num) {
  // repeat after me
var newStr = '';

  while (num > 0) {
    newStr += str;
    num--;
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);


//using if/else condition
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
    
    
//using ternary operator
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
