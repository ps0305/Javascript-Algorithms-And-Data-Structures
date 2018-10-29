The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function `incrementer` would not work without the global variable `fixedValue` being there.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.


Let's update the `incrementer` function to clearly declare its dependencies.

Write the `incrementer` function so it takes an argument, and then increases the value by one.

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (y) {
  return y = fixedValue + 1;

// Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
