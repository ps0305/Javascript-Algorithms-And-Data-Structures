/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    const [start, end] = helper(s, i);
    if (end - start + 1 > max.length) {
      max = s.substring(start, end + 1);
    }
  }
  return max;
};

function helper(s, start) {
  let left = start;
  let right = start;
  while (s[right + 1] === s[left]) {
    right += 1;
  }
  while (s[left - 1] === s[right + 1] && left - 1 >= 0 && right + 1 < s.length) {
    left -= 1;
    right += 1;
  }
  return [left, right];
}
