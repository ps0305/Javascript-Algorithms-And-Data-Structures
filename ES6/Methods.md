* Spread operator
* for…of iterator
* includes()
* some()
* every()
* filter()
* map()
* reduce()

### Spread operator
The Spread Operator `expands` an `array` into its `elements`. It can also be used for object literals.

#### Example:
```js
const favouriteFood = [ 'Pizza', 'Fries', 'Sandwitch' ];
console.log(...favouriteFood);
//Pizza Fries Sandwitch
```

### for...of iterator
The `for...of` statement loops/iterates through the collection, and provides you the ability to modify specific items. It replaces the conventional way of doing a `for-loop`.

#### Example:
```js
const languages = ['Javascript', 'Python', 'Rust', 'Go'];
for (let language of languages) {
console.log(language) }
//Javascript
//Python
//Rust
//Go
```

### Includes() method
The `includes()` method is used to check if a specific string exists in a collection, and returns `true` or `false`. Keep in mind that it is **case sensitive** : if the item inside the collection is `SCHOO`L, and you search for `school`, it will return `false`.

#### Example:
```js
const car = ['MARUTI', 'HONDA', `SUZUKI`];
const findCar = car.includes('HONDA');
console.log(findCar);
//true
```
### Some() method
The `some()` method checks if some elements exists in an array, and returns `true` or `false`. This is somewhat similar to the concept of the `includes()` method, **except** the argument is a function and `not a string`.

#### Example
```js
const age = [16,14,18]
age.some(function(person) {
  return preson >= 18;
});
//output: true
```

### Every() method
The `every()` method loops through the `array`, checks every item, and returns `true` or `false`. Same concept as `some()`. **Except** `every item` must `satisfy` the conditional statement, otherwise, it will return `false`.

#### Example
```js
const age = [15,20,19];
age.every((person) => person >= 18);
//false
```

### Filter() method
The `filter()` method creates a new array with all elements that pass the test.

#### Example
Let’s say you want to return only prices that are above or equal to 25. Filter out all those other prices.
```js
const prices = [25,30,55,15,40,10,12];
prices.filter((price) => price >= 25);
//[30,55,40]
```

### Map() method
The `map()` method is similar to the `filter()` method in terms of returning a new array. However, the only difference is that it is used to modify items.

#### Example
```js
const productPrice = [100,200,300,400];
productPrice.map((item) => item*0.75);
// [75, 150, 225, 300]
```

### Reduce() method
The `reduce()` method can be used to transform an array into something else, which could be an integer, an object, a chain of promises ( sequential execution of promises) etc. For practical reasons, a simple use case would be to sum a list of integers. In short, it `“reduces”` the whole array into `one value`.

#### Example
```js
const expenses = [200,900,4500,120,456,354,781];
expenses.reduce((first, last) => first + last);
//7311
