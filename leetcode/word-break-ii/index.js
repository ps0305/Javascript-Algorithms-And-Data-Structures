/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

/*
  dp(i) = dp(i) ||
          dp(i - wordDict[j].length) if wordDict[j] is a postfix of s.slice(0, i)
*/

const isPostFix = (s, i, w) => {
  return s.slice(i - w.length, i) === w;
};

const dfs = (dp, i, selected = '', output = []) => {
  if (i <= 0) {
    output.push(selected.trim());
    return output;
  }
  for (let j = 0; j < dp[i].length; j++) {
    dfs(dp, i - dp[i][j].length, dp[i][j] + ' ' + selected, output);
  }
  return output;
};

var wordBreak = function(s, wordDict) {
  const dp = [...new Array(s.length + 1)].map(() => []);
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const w = wordDict[j];
      if (isPostFix(s, i, w)) {
        const index = i - wordDict[j].length;
        if (index <= 0 || dp[index].length > 0) {
          dp[i].push(w);
        }
      }
    }
  }
  return dfs(dp, s.length);
};
