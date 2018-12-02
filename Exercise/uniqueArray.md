#### Removing duplicates of an array and returning an array of only unique elements

* ES6 Implementation
```js
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
```
* The `Set` object lets you store unique values of any type, whether primitive values or object references.
* The `Array.from()` method creates a new, `shallow-copied` Array instance from an array-like or iterable object.
-------------------------------------------------------------------------------------------------
* using spread method
```js
[...(new Set(array))]; // [1, 2, 3, 5, 9, 8]
```

#### ES5 Implementation
```js
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}
