/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const m = s.length;
  const dp = new Array(m + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= m; i++) {
    for (let j = 0; j < wordDict.length && dp[i] === false; j++) {
      const isBreakable = s.substring(i - wordDict[j].length, i) === wordDict[j];
      dp[i] = isBreakable && dp[i - wordDict[j].length];
    }
  }
  return dp[m];
};
