In the previous challenge, you created a `supertype` called `Animal` that defined behaviors shared by all animals:
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```
This and the next challenge will cover how to reuse Animal's methods inside `Bird` and `Dog` without defining them again. It uses a technique called `inheritance`.

This challenge covers the first step: make an instance of the `supertype` (or parent).

You already know one way to create an instance of `Animal` using the new operator:
```js
let animal = new Animal();
```
There are some `disadvantages` when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:
```js
let animal = Object.create(Animal.prototype);
```
`Object.create(obj)` creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be `Animal's` prototype, you are effectively giving the animal instance the same "recipe" as any other instance of `Animal`.
```js
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```
Use `Object.create` to make two instances of `Animal` named `duck` and `beagle`.*/
```js
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 