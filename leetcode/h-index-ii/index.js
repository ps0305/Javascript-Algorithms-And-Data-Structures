/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = citations.length;
  let left = 0;
  let right = n + 1;
  let max = 0;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (citations[n - mid] >= mid) {
      max = Math.max(max, mid);
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return max;
};
