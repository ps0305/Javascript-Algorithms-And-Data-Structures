In the previous challenge, `bird` had a public property name. 
It is considered public because it can be accessed and changed outside of bird's definition.
```js
bird.name = "Duffy";
```
Therefore, any part of your code can easily change the name of `bird` to any value. 
Think about things like passwords and bank accounts being easily changeable by any part of your codebase. 
That could cause a lot of issues.

The simplest way to make properties private is by creating a variable within the constructor function. 
This changes the scope of that variable to be within the constructor function versus available globally. 
This way, the property can only be accessed and changed by methods also within the constructor function.
```js
function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```
Here `getHachedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`. 
This is possible because `hatchedEgg` is declared in the same context as `getHachedEggCount`. 
In JavaScript, a function always has access to the context in which it was created. 
This is called `closure`.


Change how `weight` is declared in the `Bird` function so it is a private variable. 
Then, create a method `getWeight` that returns the value of `weight`.
```js
function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  }
  
}
