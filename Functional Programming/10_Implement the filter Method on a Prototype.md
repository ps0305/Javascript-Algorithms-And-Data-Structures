It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like `Array.prototype.filter()`. 
It can use either a for loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.


Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. 
You may use a for loop or the `Array.prototype.forEach()` method.

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  /* for (var i=0; i < this.length; i++) {
    if(callback(this[i]) ==1 )
    newArray.push(this[i]);
     
  } */
  
  for (let item of this) {
    if (callback(item)) {
      newArray.push(item)
    }
 // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log('new_s:' ,new_s)
