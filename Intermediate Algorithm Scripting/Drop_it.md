Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function funcreturns truewhen the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arrshould be returned as an empty array.

```js

function dropElements(arr, func) {
  // Drop them elements.
  while(!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
