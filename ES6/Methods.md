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

### Includes Methods
The `includes()` method is used to check if a specific string exists in a collection, and returns `true` or `false`. Keep in mind that it is **case sensitive** : if the item inside the collection is `SCHOO`L, and you search for `school`, it will return `false`.

#### Example:
```js
const car = ['MARUTI', 'HONDA', `SUZUKI`];
const findCar = car.includes('HONDA');
console.log(findCar);
//true
