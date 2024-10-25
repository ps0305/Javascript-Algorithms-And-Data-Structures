Currying in JavaScript is a functional programming technique that breaks down a function with multiple arguments into a series of functions that each take a single argument.

```
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  }
}
console.log(sum(1)(2)(3)) //Output: 6
```

Currying can help with: 
- Readability and maintainability: Breaking down complex functions into smaller ones makes code easier to understand.
- Reduced code duplication: Currying allows you to create reusable building blocks that can be used in different parts of your code.
- Improved function composition: Currying makes it easier to combine smaller functions to create more complex functionality.

Infinite Currying

A function can continue to curry forever, holding its arguments, until enough arguments have been received, at which point it would carry out its computation. 

```
function sum(a) {
  return function(b) {
    return b? sum(a+b): a;
  }
}
console.log(1)(2)(3)(4)(); //Output: 10
```
