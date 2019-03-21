Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
```html
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

```js
function XO(str) {
  lowerStr = str.toLowerCase();
  var x = 0;
  var o = 0;
  for ( var i=0; i<lowerStr.length; i++ ) {
    if( lowerStr[i] === 'x' ){
      x++;
    } else if( lowerStr[i] === 'o' ){
      o++;
    } 
  }
  return x === o;
}

--------------------------------------------------

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

--------------------------------------------------

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
