```js
/**
 * Flattens a nested array into a single-level array.
 *
 * @param {Array} array - The array to flatten.
 * @returns {Array} - A new array with all sub-array elements flattened.
 */
function flatten(array) {
  // Validate input to ensure it's an array
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }

  const result = []; // Create a new array to store the flattened elements

  // Helper function to recursively flatten the array
  function recursiveFlatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (Array.isArray(item)) {
        // If the item is an array, recurse into it
        recursiveFlatten(item);
      } else {
        // If it's not an array, push it to the result
        result.push(item);
      }
    }
  }

  recursiveFlatten(array); // Start the recursive flattening
  return result; // Return the flattened array
}

export default flatten;
```
### Explanation
#### Validate Input:
The function verifies that the input array is indeed an array using Array.isArray and throws an error if it's not.

#### Create a result Array:
A new array (result) is created to store the flattened elements. This ensures that the original input array remains unchanged (pure function).

#### Recursive Helper Function:
A recursive helper function, recursiveFlatten, is defined to iterate through the array:

* If an element is an array (Array.isArray(item)), the function recursively calls itself with the sub-array.
* If the element is not an array, it is directly pushed into the result array.
#### Return the Result:
After the recursive flattening is complete, the result array is returned.
