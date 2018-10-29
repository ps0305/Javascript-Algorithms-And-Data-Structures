So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.


Refactor (rewrite) the code so the global array `bookList` is not changed inside either function. 
The `add` function should add the given `bookName` to the end of an array. The `remove` function should remove the given `bookName` from an array. 
Both functions should return an array, and any new parameters should be added before the `bookName` one.

```js
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookName) {
  
  return [...bookList].push(bookName);
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
let BL =[...bookList];
if (BL.indexOf(bookName) >= 0) {
   let bl=[];
   BL.map((a,i)=>{
  if (a!=bookName) {
    bl.push(a);
  }
});
return bl;
}
// Add your code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
