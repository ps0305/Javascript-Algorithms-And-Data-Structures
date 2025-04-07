Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function

```js
export default function debounce(func, wait) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  let timeoutId; // Stores the ID of the currently active timeout

  return function (...args) {
    // Save the context and arguments for the callback function
    const context = this;

    // Clear the previous timeout, if any, to reset the timer
    clearTimeout(timeoutId);

    // Set a new timeout to execute the callback function after the wait period
    timeoutId = setTimeout(() => {
      func.apply(context, args); // Execute the callback in the proper context
    }, wait);
  };
}
```

### Explanation
#### Validate the Input:
We check if func is a valid function. If not, we throw a TypeError.

#### Declare `timeoutId`:
This variable is used to track the currently set timeout.

#### Return the Debounced Function:
The `debounce` function returns a new function. This returned function:

* Clears the timeoutId timer using clearTimeout if it exists. This ensures that the previous scheduled execution is canceled.
* Sets a new timer using the setTimeout function with the specified wait duration.
  
#### Call the Function with Proper Context:
When the timer expires, we use `func.apply(context, args)` to invoke the callback function with the proper `this` context and arguments. This ensures that the callback behaves as expected in the context of the calling code.
