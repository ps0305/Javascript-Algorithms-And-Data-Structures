/**
 * @param {string} s
 * @return {number}
 */

/*
  dp[i][j] = (() => {
    if (i === j) {
      return true;
    }
    return s[i] === s[j] && dp[i + 1][j - 1];
  })();
*/

const isPalindromicSubstring = (s, i, j, dp) => {
  if (s[i] === s[j]) {
    return j - i + 1 <= 2 || dp[i + 1][j - 1];
  }
  return false;
};

var countSubstrings = function(s) {
  const m = s.length;
  const dp = [...new Array(m)].map(() => new Array(m).fill(false));
  let n = 0;
  for (let l = 1; l <= m; l++) {
    for (let i = 0; i < m; i++) {
      const j = i + l - 1;
      dp[i][j] = isPalindromicSubstring(s, i, j, dp);
      if (dp[i][j]) {
        n += 1;
      }
    }
  }
  return n;
};
