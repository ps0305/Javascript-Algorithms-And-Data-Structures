We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

```js
function sumAll(arr) {
 let smallArr = Math.min(...arr);
 let largeArr = Math.max(...arr);

 let total = smallArr + largeArr;
	 for ( let i = smallArr + 1; i < largeArr; i++ ) {
	   total += i;
	 }
 return total;
}

sumAll([1, 4]);
````