```js
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(callbackFn + ' is not a function');
  }

  const arr = this; // `this` refers to the array on which myReduce is called
  let accumulator = initialValue; // Initialize the accumulator
  let startIndex = 0; // Starting index for iteration
  
  // If initialValue is not provided, use the first element as the initial value
  if (accumulator === undefined) {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[0];
    startIndex = 1; // Skip the first element since it's now the accumulator
  }

  // Iterate through the array elements and apply the callback function
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i, arr);
  }

  return accumulator; // Return the accumulated value
};
```
### Explanation
Check if callbackFn is a function: We first check if the provided callbackFn is a valid function. If not, we throw a TypeError.

#### Handle initialValue:

* If initialValue is provided, we use it to initialize the accumulator.
* If no initialValue is provided, we take the first element of the array (arr[0]) as the accumulator.
* However, if the array is empty and no initialValue is provided, we throw a TypeError.

#### Iterate over the array: We use a for loop to iterate over the elements of the array starting at startIndex. For each element, we call the callbackFn with the following arguments:

* accumulator (the accumulated value so far),
* the current element (arr[i]),
* the current index (i),
* the entire array (arr).

#### Update the accumulator: The result of the callbackFn is assigned back to the accumulator.

#### Return the result: Finally, we return the accumulated value (accumulator).
