/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length);
  const dp = {};
  let max = 1;
  for (const word of words) {
    dp[word] = 1;
    for (let i = 0; i < word.length; i++) {
      const predecessor = word.substring(0, i) + word.substring(i + 1);
      dp[word] = Math.max(dp[word], (dp[predecessor] || 0) + 1);
    }
    max = Math.max(max, dp[word]);
  }
  return max;
};
