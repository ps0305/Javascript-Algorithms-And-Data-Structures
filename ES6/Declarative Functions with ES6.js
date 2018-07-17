/*When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);