Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
* Constraints
```js
0 <= input.length <= 100

---------------------------------------
function validParentheses(braces){
  const isOpening = (b) => b === '{' || b === '[' || b === '(';

const closing = (b) => {
  switch(b) {
    case '{':
      return '}';
    case '[':
      return ']';
    case '(':
      return ')';
  }
}
  const bStack = [];
  for (let b of braces) {
    if (isOpening(b)) {
      bStack.push(closing(b));
    } else {
      if (b !== bStack.pop()) return false
    }
  }
  return bStack.length === 0;
}

---------------------------------------

function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}
