A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, `Bird` is a constructor that inherits its prototype from `Animal`:
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```
In addition to what is inherited from `Animal`, you want to add behavior that is unique to `Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added to Bird's prototype the same way as any constructor function:
```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```
Now instances of Bird will have both eat() and fly() methods:
```js
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```
Add all necessary code so the `Dog` object inherits from Animal and the Dog's prototype constructor is set to `Dog`. Then add a `bark`() method to the Dog object so that beagle can both `eat`() and `bark`(). The `bark`() method should print `"Woof!"` to the console.

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
}
// Add your code above this line
let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"