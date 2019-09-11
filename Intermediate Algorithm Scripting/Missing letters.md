Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

[String Global Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
[String fromCharCode() Method](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)


```js
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let asciiCode = str.charCodeAt(i);
  if (asciiCode !== str.charCodeAt(0) + i) {
    return String.fromCharCode(asciiCode - 1)
    }
  }
  return undefined;
}

fearNotLetter("abce");
```

* Using Reduce

```js
function fearNotLetter(str) {
  var lost;
  str = str.split('');
  str.reduce(function(acc, val){
    if (val.charCodeAt() - acc.charCodeAt() != 1) 
      lost = String.fromCharCode(val.charCodeAt() - 1);
    return val;
  }, String.fromCharCode(str[0].charCodeAt() - 1));
  return lost;
}

fearNotLetter("de");
```


