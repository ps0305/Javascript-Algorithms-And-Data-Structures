/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  const prefix = createPrefixTable(s + '#' + reverse(s));
  const length = prefix[prefix.length - 1];
  return reverse(s.substring(length)) + s;
};

function createPrefixTable(str) {
  const arr = new Array(str.length).fill(0);
  let j = 0;
  for (let i = 1; i < str.length; i++) {
    while (str[i] !== str[j] && j > 0) {
      j = arr[j - 1];
    }
    if (str[i] === str[j]) {
      j += 1;
    }
    arr[i] = j;
  }
  return arr;
}

function reverse(s) {
  let output = '';
  for (const c of s) {
    output = c + output;
  }
  return output;
}
