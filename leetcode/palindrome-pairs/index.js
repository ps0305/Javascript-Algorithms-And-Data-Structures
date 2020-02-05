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
  const map = words.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});
  const output = [];
  for (const word of words) {
    for (let j = 0; j <= word.length; j++) {
      if (j < word.length && isPalindrome(word, j, word.length)) {
        const rLeft = reverseSubstring(word, 0, j);
        if (rLeft in map) {
          output.push([map[word], map[rLeft]]);
        }
      }
      if (isPalindrome(word, 0, word.length - j)) {
        const rRight = reverseSubstring(word, word.length - j, word.length);
        if (rRight in map && rRight !== word) {
          output.push([map[rRight], map[word]]);
        }
      }
    }
  }
  return output;
};

function reverseSubstring(word, start, end) {
  let output = '';
  for (let i = end - 1; i >= start; i--) {
    output += word[i];
  }
  return output;
}

function isPalindrome(word, start, end) {
  let left = start;
  let right = end - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}
