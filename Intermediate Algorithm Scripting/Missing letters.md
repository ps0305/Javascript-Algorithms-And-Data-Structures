Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

[String Global Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


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
