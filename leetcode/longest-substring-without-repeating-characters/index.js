/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const visited = new Set();
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    while (visited.has(s[i])) {
      visited.delete(s[start]);
      start += 1;
    }
    visited.add(s[i]);
    max = Math.max(max, i - start + 1);
  }
  return max;
};
