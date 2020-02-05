/**
 * @param {string} s
 * @return {number}
 */
/*
  dp[i] = (() => {
    let min = Infinity;
    for (let j = 1; j <= i; j++) {
      const substring = s.substring(i - j, j);
      if (isPalindrome(substring)) {
        min = Math.min(min, dp[i - j] + 1);
      }
    }
    return min;
  })();
*/
var minCut = function(s) {
  const n = s.length;
  const isPalindrome = createPalindromeTable(s, n);
  const dp = new Array(n + 1).fill(0);
  dp[0] = -1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (() => {
      let min = Infinity;
      for (let j = 1; j <= i; j++) {
        if (isPalindrome[i - j][i - 1]) {
          min = Math.min(min, dp[i - j] + 1);
        }
      }
      return min;
    })();
  }
  return dp[n];
};

function createPalindromeTable(str, n) {
  const dp = [...new Array(n)].map(() => new Array(n).fill(false));
  for (let length = 1; length <= str.length; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      dp[i][j] = (() => {
        if (length <= 2) {
          return str[i] === str[j];
        }
        return str[i] === str[j] && dp[i + 1][j - 1];
      })();
    }
  }
  return dp;
}
