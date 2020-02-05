/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  s.reverse();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue;
    }
    let j = i;
    while (j < s.length && s[j] !== ' ') {
      j += 1;
    }
    reverse(s, i, j);
    i = j - 1;
  }
};

function reverse(s, start, end) {
  let i = start;
  let j = end - 1;
  while (i < j) {
    [s[j], s[i]] = [s[i], s[j]];
    i += 1;
    j -= 1;
  }
}
