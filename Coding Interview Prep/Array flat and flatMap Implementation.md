## flat

The flat method, part of the array prototype, returns a new array, spreading the content of nested arrays found in the list.
It eventually takes an optional depth argument that represents how many nested levels of our array we want to spread before stopping.


```js
function flat(array) {
  const flattened = [];

  (function flatterner(list) {
    for (const el of list) {
      if (Array.isArray(el)) {
        flatterner(el);
      } else {
        flattened.push(el);
      }
    }
  })(array);

  return flattened;
}
```

## with Depth

```js

function flat(array, depth=1) {
  const flattened = [];

  (function flatterner(list, dp) {
    for (const el of list) {
      if (Array.isArray(el) && dp) {
        flatterner(el, dp - 1);
      } else {
        flattened.push(el);
      }
    }
  })(array, depth);

  return flattened;
}
```

## flatMap

The flatMap method works very similarly to flat, but it iterates over every element and flats the result of the passed callback function into a new array.
We could see it as a combination of the usual map and flat methods.

The difference from flat is that this method only flattens the callback result by one level, and not deeply as flat does.

```js
functionn flatMap(array, callback) {
  const flattened = [];
  for (let i = 0; i < array.length; i++) {
    const elementArr = callback(array[i], i, array);
    for (const el of elementArr) {
      flattened.push(el)
    }
  }
  
  return flattened;
}
```

### How would you flatten an array which goes to 'N' levels of nesting.

> Input: [1,2,[3,4,[5,6,[7,[8,9]]]]]

> Expected Output: [1,2,3,4,5,6,7,8]

```js
let arr = [1,2,[3,4,[5,6,[7,[8,9]]]]];

function flatten(arr) {
    const flattenedArr = arr.reduce((acc, rItem) => {
        if (Array.isArray(rItem)) {
            acc = acc.concat(flatten(rItem));
        } else {
            acc.push(rItem);
        }
        return acc;
    }, [])
    return flattenedArr
}
