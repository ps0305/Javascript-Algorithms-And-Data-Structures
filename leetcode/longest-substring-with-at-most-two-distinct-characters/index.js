/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstringTwoDistinct = function(s) {
  const counts = {};
  let nDistinct = 0;
  let max = 0;
  let left = 0;
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (!counts[s[i]]) {
      nDistinct += 1;
    }
    counts[s[i]] = (counts[s[i]] || 0) + 1;
    length += 1;
    if (nDistinct <= 2) {
      max = Math.max(max, length);
    }
    while (nDistinct > 2) {
      counts[s[left]] -= 1;
      if (counts[s[left]] <= 0) {
        nDistinct -= 1;
      }
      left += 1;
      length -= 1;
    }
  }
  return max;
};
