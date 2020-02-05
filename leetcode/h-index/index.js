/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = citations.length;
  const freq = createFreq(citations, n);
  let count = 0;
  for (let i = n; i >= 0; i--) {
    count += freq[i] || 0;
    if (count >= i) {
      return i;
    }
  }
  return 0;
};

function createFreq(arr, n) {
  const freq = {};
  for (const val of arr) {
    const key = val >= n ? n : val;
    freq[key] = (freq[key] || 0) + 1;
  }
  return freq;
}
