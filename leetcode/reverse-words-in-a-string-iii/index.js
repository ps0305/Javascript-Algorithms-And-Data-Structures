/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let output = '';
  for (let i = 0; i < s.length; ) {
    let j = i;
    while (s[j] !== ' ' && j < s.length) {
      j += 1;
    }
    output += (!output.length ? '' : ' ') + reverse(s, i, j);
    i = j + 1;
  }
  return output;
};

function reverse(s, start, end) {
  let output = '';
  for (let i = start; i < end; i++) {
    output = s[i] + output;
  }
  return output;
}
