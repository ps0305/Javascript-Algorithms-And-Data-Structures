Given the numerical series as argument. 
Write a function to move all zeros to the end non-zero elements will be sorted into their natural order (from smaller to bigger).

For instance: Given numbers `(0, 1, 2, 0, 3, 0, 5, 6)`. Your function should return an array of numbers: `[0, 1, 2, 0, 3, 0, 5, 6]`.
```js
function pushZerosToEnd(arr) {
  let count = 0;  // Count of non-zero elements

  // Traverse the array. If element encountered is
  // non-zero, then replace the element at index 'count'
  // with this element
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) arr[count++] = arr[i]; // here count is incremented
  }

  // Now all non-zero elements have been shifted to
  // front and 'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < arr.length) arr[count++] = 0;
  
  return arr;
}

console.log(pushZerosToEnd([0, 1, 2, 0, 3, 0, 5, 6]))
```
==============================================================
```js
var pushZerosToEnd = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
```
==============================================================
```js
var pushZerosToEnd = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
```
==============================================================
```js
var pushZerosToEnd = function (arr) {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      result.push(arr[i]);
    } else {
      result.unshift(arr[i]);
    }
  }
  
  return result;
}
```
