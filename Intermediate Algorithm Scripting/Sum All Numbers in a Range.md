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

Another Approach

```js
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([10, 5]);
