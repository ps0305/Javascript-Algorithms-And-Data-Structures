/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  const m = arr.length;
  const heights = arr.map((_, i) => i).sort((a, b) => arr[a] - arr[b]);
  const dp = new Array(m).fill(1);
  for (const i of heights) {
    for (let j = i - 1; i - j <= d && j >= 0 && arr[j] < arr[i]; j--) {
      dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
    for (let j = i + 1; j - i <= d && j < m && arr[j] < arr[i]; j++) {
      dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  }
  return Math.max(...dp);
};
