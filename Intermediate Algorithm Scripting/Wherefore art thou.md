Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

```js
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```

* Another approach

```js
function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}
