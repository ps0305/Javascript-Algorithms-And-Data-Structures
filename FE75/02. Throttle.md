```js
function throttle(func, wait) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  let isThrottled = false; // A flag to track whether the function is throttled

  return function (...args) {
    const context = this; // Preserve `this` context for the callback

    if (!isThrottled) {
      // If not throttled, invoke the callback
      func.apply(context, args);

      // Set the throttling state to true
      isThrottled = true;

      // Reset the throttling state after the wait duration
      setTimeout(() => {
        isThrottled = false;
      }, wait);
    }
  };
}
```
### Explanation
#### Validate Input:
The function checks whether the provided func is a valid function using typeof. If not, it throws a TypeError.

#### Tracking Throttle State:
A flag `(isThrottled)` is used to determine if the function is currently throttled. When the function is invoked, the flag is set to true, preventing further calls to func until the wait time expires.

#### Return the Throttled Function:
The throttle function returns a new function. The returned function:

* Checks the `isThrottled` flag. If false, it immediately invokes the callback function (func) using func.apply(context, args) to maintain the correct this context and arguments.
* Sets the `isThrottled` flag to true to start throttling.
* Uses `setTimeout` to reset the isThrottled flag back to false after the specified wait duration.

### Example
```js
import throttle from './throttle';

function logMessage(message) {
  console.log(`Logged: ${message}`);
}

const throttledLog = throttle(logMessage, 2000); // Throttle with 2000ms wait time

// Simulate rapid calls
throttledLog('Hello!');
throttledLog('Hello again!');
throttledLog('Hello one more time!');

// Output:
// "Logged: Hello!" (immediately)
// No other calls invoke the callback for the next 2000ms
```
