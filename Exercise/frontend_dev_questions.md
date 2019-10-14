
```js
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); 
 
var test = obj.prop.getFullname; 
 
console.log(test());
```

### Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

```js
// Solution
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); 
 
var test = obj.prop.getFullname.bind(obj.prop); 
 
console.log(test());
```

### The following code outputs 100, a hundred times, fix it so it outputs every number with a 100ms delay between each
```js
for (var i = 0; i < 100; ++i) {
  setTimeout(function() {
    console.log(i);
  }, 100);
} 
```
* Solution

```js

var i = 0, j = setInterval(function () { 
  console.log(i++); 
  if (i === 100) { clearInterval(j) } 
}, 100);
```
#### Count the occurrence of each word in a phrase using javascript

```js
function count(str){
  var obj={};
  str.toLowerCase().split("").forEach(function(el,i,arr){
    obj[el] = obj[el] ? ++obj[el] : 1;
  });
  return obj;
}
console.log(count("Hello Wworld"));
```
