/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// https://my.oschina.net/cofama/blog/873084

const longestNDistinctAndNoLessThanK = (s, k, targetNUniques) => {
  const counts = {};
  let nUniques = 0;
  let nNoLessThanK = 0;
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (!counts[s[i]]) {
      nUniques += 1;
    }
    counts[s[i]] = (counts[s[i]] || 0) + 1;
    if (counts[s[i]] === k) {
      nNoLessThanK += 1;
    }
    while (nUniques > targetNUniques) {
      counts[s[left]] -= 1;
      if (counts[s[left]] === 0) {
        nUniques -= 1;
      }
      if (counts[s[left]] === k - 1) {
        nNoLessThanK -= 1;
      }
      left += 1;
    }
    if (nNoLessThanK === nUniques) {
      max = Math.max(max, i - left + 1);
    }
  }
  return max;
};

var longestSubstring = function(s, k) {
  if (!k) {
    return s.length;
  }
  let max = 0;
  for (let targetNUniques = 1; targetNUniques <= 26; targetNUniques++) {
    max = Math.max(max, longestNDistinctAndNoLessThanK(s, k, targetNUniques));
  }
  return max;
};
