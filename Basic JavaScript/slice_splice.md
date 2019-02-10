* The splice() method adds/removes items to/from an array, and returns the removed item(s).
#### Note: This method changes the original array.
```js
array.splice(index, noOfItems, item1, ....., itemX) //only index is Required one,rest are optional.

var superHeroes = ["Ironman", "Hulk", "Blackpanther", "Superman"];
superHeroes.splice(2, 1, "Batman", "CaptainAmerica"); //Ironman,Hulk,Batman,CaptainAmerica,Superman
```
