A new feature of ES6 is the template literal. 
This is a special type of string that allows you to use string interpolation features to create strings.

Consider the code below:
```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
A lot of things happened there.

Firstly, the` ${variable}` syntax used above is a place holder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with `${ and }`.

Secondly, the example uses backticks (`), not quotes (' or "), to wrap the string. Notice that the string is multi-line.

This new way of creating strings gives you more flexibility to create robust strings.


Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
   const resultDisplayArray = [];
      for(let i=0; i< arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
      }
      
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);

```

## Tagged template literal

```js
function upper(strings,...values) {
	var s = "";
	for( let i = 0; i < strings.length; i++ ) {
		if(i > 0) {
			s += String(values[i-1]).toUpperCase();
		}
		s += strings[i];
	}
	return s
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper `Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
