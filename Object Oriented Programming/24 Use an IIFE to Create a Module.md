An immediately invoked function expression (`IIFE`) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:
```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```
We can group these mixins into a module as follows:
```js
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked
```
Note that you have an immediately invoked function expression (`IIFE`) that returns an object motionModule. 
This returned object contains all of the mixin behaviors as properties of the object.

The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. 
Here is an example using it:
```js
motionModule.glideMixin(duck);
duck.glide();
```
Create a module named `funModule` to wrap the two `mixins` `isCuteMixin` and `singMixin`. `funModule` should return an object.
```js
let funModule = (function(){
  return {
    isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
   singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
    };
  }
}
})();
