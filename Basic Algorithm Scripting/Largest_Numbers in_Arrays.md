* Basic
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

```js
function largestOfFour(arr) {
  var largest = [];
  for(var i=0;i<arr.length;i++){
      var largNumber = arr[i][0];
    for(var j=1; j<arr[i].length;j++){
      if(arr[i][j]>largNumber){
        largNumber = arr[i][j];
      }
    }
    largest[i] = largNumber;
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

* Intermediate

```js
function largestOfFour(arr) {
  return arr.map(function(item) {
    return item.reduce(function(current, previous) {
     return (current > previous) ? current : previous;
    });
  });
};
```

* Declarative approach

```js
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```
* Code Explanation:
**TL;DR:** 
We build a special callback function (using the `Function.bind` method), 
that works just like `Math.max` but also has `Function.prototype.apply’s` ability to take arrays as its arguments  :smiley:

We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.
Now the need a callback function to find the max of each inner array provided by the map.
So we want to create a function that does the work of Math.max and accepts input as an array (which by it doesn’t by default).

In other words, it would be really nice and simple if this worked by itself:

Math.max([9, 43, 20, 6]); // Resulting in 43

Alas, it doesn’t.

To do the work of accepting arguments in the shape of an array, 
there is this `Function.prototype.apply` method, but it complicates things a bit by invoking the context function.
i.e. `Math.max.apply(null, [9, 43, 20, 6])`; would invoke something like a Max.max method. What we’re looking for… almost.

Here we’re passing null as the context of the `Function.prototype.apply` method as Math.max doesn’t need any context.

Since `arr.map` expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.

Since, `Function.prototype.apply` is a static method of the same Function object, we can call `Function.prototype.bind` on `Function.prototype.apply` i.e. `Function.prototype.apply.bind`.

Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain its functionality).

Since the embedded `Function.prototype.apply` method will also require a context as it’s 1st argument, we need to pass it a bogus context.

So, we pass null as the 2nd param to `Function.prototype.apply.bind` which gives a context to the `Math.max` method.

Since, `Math.max` is independent of any context, hence, it ignores the bogus context given by `Function.prototype.apply` method call.

Thus, our `Function.prototype.apply.bind(Math.max, null)` makes a new function accepting the `arr.map` values i.e. the `inner arrays`.
