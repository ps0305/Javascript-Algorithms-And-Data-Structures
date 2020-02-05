/**
 * @param {string[]} words
 * @return {number[][]}
 */
/*
  left|right
  left|right|reversed left => llsss ss => llsss ss sssll
  reversed right|left|right => ss sssll => llsss ss sssll
*/
var palindromePairs = function(words) {
  const map = words.reduce((acc, cur, i) => ({ ...acc, [cur]: i }), {});
  const output = [];
  for (const word of words) {
    for (let length = 0; length <= word.length; length++) {
      const rLeft = substring(word, 0, length);
      const right = word.substring(length);
      if (word !== rLeft && rLeft in map && isPalindrome(right) && length < word.length) {
        output.push([map[word], map[rLeft]]);
      }
      const left = word.substring(0, word.length - length);
      const rRight = substring(word, word.length - length);
      if (word !== rRight && rRight in map && isPalindrome(left)) {
        output.push([map[rRight], map[word]]);
      }
    }
  }
  return output;
};

function substring(str, ...args) {
  return str
    .substring(...args)
    .split('')
    .reverse()
    .join('');
}

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}
