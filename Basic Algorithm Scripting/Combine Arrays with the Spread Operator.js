/*Another huge advantage of the spread operator, is the ability to combine arrays, 
or to insert all the elements of one array into another, at any index. 
With more traditional syntaxes, we can concatenate arrays, 
but this only allows us to combine arrays at the end of one, and at the start of another. 
Spread syntax makes the following operation extremely simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
Using spread syntax, we have just achieved an operation that would have been more more complex and more verbose had we used traditional methods.


We have defined a function spreadOut that returns the variable sentence, 
modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());