We can also generate an array which contains all the keys stored in an object using the `Object.keys()` method and passing in an object as the argument. This will `return` an `array` with strings representing each property in the object. 
* Again, there will be no specific order to the entries in the array.


Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));
