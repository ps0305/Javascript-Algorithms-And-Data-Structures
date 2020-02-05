/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  const m = A.length;
  const dp = new Array(m).fill(null).map(() => new Array(m).fill(0));
  let max = 0;
  for (let i = 2; i < m; i++) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      const sum = A[left] + A[right];
      if (sum === A[i]) {
        dp[right][i] = Math.max(dp[right][i], dp[left][right] + 1);
        max = Math.max(max, dp[right][i]);
        left += 1;
        right -= 1;
      } else if (sum > A[i]) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
  return max > 0 ? max + 2 : 0;
};
