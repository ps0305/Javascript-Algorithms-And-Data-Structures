If you haven't already figured it out, the issue in the previous challenge was with the `splice` call in the `tabClose()` function. 
Unfortunately, `splice` changes the original array it is called on, so the second call to it used a modified array, 
and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, 
and the function changes the variable or something in the object.

One of the core principle of functional programming is to not change things. Changes lead to bugs. 
It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a `side effect`. 
A function, ideally, should be a `pure function`, meaning that it does not cause any `side effects`.

Let's try to master this discipline and not alter any variable or object in our code.


Fill in the code for the function `incrementer` so it returns the value of the global variable `fixedValue` increased by one.

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  let y = fixedValue + 1;
  return y;
  
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
