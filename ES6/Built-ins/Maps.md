## Maps
If `Sets` are similar to `Arrays`, then `Maps` are similar to `Objects` because `Maps` store `key-value pairs` similar to how objects contain named properties with values.

Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

### How to Create a Map
To create a Map, simply type:

```js
const employees = new Map();
console.log(employees);
```
> Map {}

This creates an empty Map employee with no key-value pairs.

### Modifying Maps
Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s `.set()` method.

```js
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);
```
> Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

The `.set()` method takes two arguments. The first argument is the key, which is used to reference the second argument, the value.

To remove key-value pairs, simply use the `.delete()` method
```js
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);
```
> Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}

Again, similar to Sets, you can use the `.clear()` method to remove all key-value pairs from the Map.
```js
employees.clear()
console.log(employees);
```

> Map {}

> TIP: If you `.set()` a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to `.delete()` a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.

> The `.delete()` method returns true if a key-value pair is successfully deleted from the Map object, and false if unsuccessful. The return value of `.set()` is the Map object itself if successful.

## Working with Maps

After you’ve built your Map, you can use the `.has()` method to check if a key-value pair exists in your Map by passing it a key.

```js
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
```
> false
> true

And you can also retrieve values from a Map, by passing a key to the `.get()` method.
```js
console.log(members.get('Evelyn'));
```
> 75.68

## Looping Through Maps

You’ve created a Map, added some key-value pairs, and now you want to loop through your Map. Thankfully, you’ve got three different options to choose from:

1. Step through each key or value using the Map’s default iterator
2. Loop through each key-value pair using the new for...of loop
3. Loop through each key-value pair using the Map’s .forEach() method
### 1. Using the MapIterator
Using both the `.keys()` and `.values()` methods on a Map will return a new iterator object called MapIterator. You can store that iterator object in a new variable and use .next() to loop through each key or value. Depending on which method you use, will determine if your iterator has access to the Map’s keys or the Map’s values.
```js
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
```
> Object {value: 'Evelyn', done: false}

Use `.next()` to the get the next key value.
```js
iteratorObjForKeys.next();
```
> Object {value: 'Liam', done: false}
And so on.
```js
iteratorObjForKeys.next();
```
> Object {value: 'Sophia', done: false}

On the flipside, use the `.values()` method to access the Map’s values, and then repeat the same process.
```js
let iteratorObjForValues = members.values();
iteratorObjForValues.next();
```
> Object {value: 75.68, done: false}

### 2. Using a for...of Loop
Your second option for looping through a Map is with a `for...of` loop.
```js
for (const member of members) {
  console.log(member);
}
```
> ['Evelyn', 75.68]
> ['Liam', 20.16]
> ['Sophia', 0]
> ['Marcus', 10.25]
 
However, when you use a `for...of` loop with a Map, you don’t exactly get back a key or a value. Instead, the key-value pair is split up into an array where the first element is the key and the second element is the value. If only there were a way to fix this?

```js
/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    [ a, b ] = member;
    console.log(a, b);
}
```
### 3. Using a forEach Loop

Your last option for looping through a Map is with the `.forEach()` method.
```js
members.forEach((value, key) => console.log(key, value));
```
> 'Evelyn' 75.68
> 'Liam' 20.16
> 'Sophia' 0
> 'Marcus' 10.25
 
 Notice how with the help of an arrow function, the `forEach` loop reads fairly straightforward. For each `value` and `key` in members, log the value and key to the console.
