/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  const m = stations.length;
  const dp = new Array(m + 1).fill(0);
  dp[0] = startFuel;
  for (let i = 1; i <= m; i++) {
    for (let j = i; j >= 1; j--) {
      const max = dp[j - 1] >= stations[i - 1][0] ? dp[j - 1] + stations[i - 1][1] : 0;
      dp[j] = Math.max(dp[j], max);
    }
  }
  for (let i = 0; i <= m; i++) {
    if (dp[i] >= target) {
      return i;
    }
  }
  return -1;
};
