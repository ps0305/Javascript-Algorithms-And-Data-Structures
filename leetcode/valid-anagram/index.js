/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const freq = createFreq(t);
  for (const c of s) {
    freq[c] = (freq[c] || 0) - 1;
    if (freq[c] < 0) {
      return false;
    }
  }
  for (const c in freq) {
    if (freq[c] > 0) {
      return false;
    }
  }
  return true;
};

function createFreq(str) {
  const freq = {};
  for (const c of str) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
