## What is a WeakSet?
A WeakSet is just like a normal Set with a few key differences:

* a WeakSet can only contain objects
* a WeakSet is not iterable which means it can’t be looped over
* a WeakSet does not have a `.clear()` method
You can create a WeakSet just like you would a normal Set, except that you use the WeakSet constructor.

```js
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
```
> WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}
…but if you try to add something other than an object, you’ll get an error!
```js
roster.add('Amanda');
```
> Uncaught TypeError: Invalid value used in weak set(…)
