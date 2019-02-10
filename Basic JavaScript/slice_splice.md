* The splice() method adds/removes items to/from an array, and returns the removed item(s).
#### Note: This method changes the original array.
```js
array.splice(index, noOfItems, item1, ....., itemX) //only index is Required one,rest are optional.

var superHeroes = ["Ironman", "Hulk", "Blackpanther", "Superman"];
superHeroes.splice(2, 1, "Batman", "CaptainAmerica"); //Ironman,Hulk,Batman,CaptainAmerica,Superman
```

* The slice() method returns the selected elements in an array, as a new array object.
The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
#### Note: The original array will not be changed.
```js
array.slice(start, end)

var superHeroes = ["Ironman", "Hulk", "Blackpanther", "Superman"];
superHeroes.slice(1, 3); //Hulk,Blackpanther
```
