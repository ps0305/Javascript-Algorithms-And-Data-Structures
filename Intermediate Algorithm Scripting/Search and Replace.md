Perform a search and replace on the sentence using the arguments provided and return the new sentence.

* First argument is the sentence to perform the search and replace on.

* Second argument is the word that you will be replacing (before).

* Third argument is what you will be replacing the second argument with (after).

#### Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


```js
function myReplace(str, before, after) {
// find the index of the string to be replaced
  let index = str.indexOf(before);
  // check whether the first letter is capital or not
  if (str[index] === str[index].toUpperCase()) {
  // change the after word for capitalization
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }
  // replace the original word with the desired one
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

* ES6

```js
function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter((item) => item === before);
    return wordToReplace[0].toUpperCase() !== wordToReplace[0] 
      ? strArr.map(item => (item === before ? after : item))
      .join(" ")
      : strArr.map(item => (item === before ? after[0].toUpperCase()
      + after.slice(1) : item))
      .join(" ")
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
