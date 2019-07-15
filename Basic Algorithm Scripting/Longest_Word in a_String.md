* Basic Solution
```js
function findLongestWordLength(str) {
  var wordOne = str.split(' ');
  var maxLength = 0;
  for(var i=0;i<wordOne.length;i++){
    if(wordOne[i].length>maxLength){
      maxLength = wordOne[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(--------------------------------------------------------);

function findLongestWordLength(str) {
  let arrStr =  str.split(' ');
  let longWord = 0;
  for ( let item of arrStr) {
    if(item.length > longWord) {
      longWord = item.length;
    }
  }
  return longWord
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
```

* Intermediate Code Solution
> Using .reduce()
```js
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}
```

* Using recursiveness

```js
function findLongestWordLength(str) {

  //split the string into individual words 
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element, 
  //return the length of that element
  if(str.length == 1){
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function)
  if(str[0].length >= str[1].length){
    str.splice(1,1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1,str.length).join(" "));
  }
}
