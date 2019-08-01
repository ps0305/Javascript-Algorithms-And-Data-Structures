Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.


```js
function diffArray(arr1, arr2) {
  var newArr = [];
  function compareTwo(first, second) {
      for (let i = 0; i < first.length; i++) {
        if(second.indexOf(first[i]) == -1) {
          newArr.push(first[i]);
        }
  }
}
  compareTwo(arr1,arr2);
  compareTwo(arr2,arr1);

  return newArr;
  }
  
}
```
* with ES6

```js
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item) => {
    return (!arr1.includes(item) || !arr2.includes(item))
  })
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
