Recursion is when you define something in terms of itself. 
Has anyone ever used the word you wanted defined in the definition that they gave you? "What is a computer?" "It's something that computes things." This would be a recursive definition.

When we talk about recursion in computer science, we are talking about a function that calls itself. 
This technique is especially adept at some problems because of its ability to maintain state at different levels of recursion.

While recursion can make the code very simple for some problems, 
it inherently carries a potentially large footprint with it as every time you call the function, 
it adds another call to the stack. 
Some problems therefore are better solved in a slightly-more-complicated-but-more-effecient way of iteration (loops) instead of recursion.

```js
/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num-1);
}

// unit tests
// do not modify the below code
describe('factorial', function() {
  it('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});
