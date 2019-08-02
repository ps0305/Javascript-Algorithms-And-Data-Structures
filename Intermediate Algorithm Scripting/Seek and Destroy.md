You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these `arguments`.

#### JavaScript Arguments
The arguments object is an object that stores all of the values passed to the function. Python developers might think of JS object as a dictionary. The arguments object takes on the structure of a JSON Object.
Try the following code:
```js
 function viewArgs() {
    return arguments;
}
console.log(viewArgs([3, 5, 1, 2, 2], 2, 3, 5));    
console.log(viewArgs([2, 3, 2, 3, 2, 3]));   
console.log(viewArgs(3,2,1,"life the universe and all"));
console.log(viewArgs("Douglas","Adams"));
console.log(viewArgs(["hello", "World!", 'and', 'thanks', 'for','all','the', 'fish'], "dolphines";
```

returns the following:
```js
{ '0': [ 3, 5, 1, 2, 2 ], '1': 2, '2': 3, '3': 5 }
{ '0': [ 2, 3, 2, 3, 2, 3 ] }
{ '0': 3, '1': 2, '2': 1, '3': 'life the universe and all' }
{ '0': 'Douglas', '1': 'Adams' }
{ '0': [ 'hello', 'World!', 'and', 'thanks', 'for', 'all', 'the', 'fish' ],   '1': 'dolphins
```

* Basic solution
```js
function destroyer(arr) {
 let args = Array.prototype.slice.call(arguments);
  for ( let i=0; i < arr.length; i++) {
    for ( let j = 0; j < args.length; j++) {
      if(arr[i] === args[j]){
        delete arr[i]
      }
    }
  }
  return arr.filter(Boolean);
}
```

* ES6

```js
function destroyer(arr) {
  let args = [...Array.from(arguments)];
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
